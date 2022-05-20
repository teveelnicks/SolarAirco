import assert = require('assert');
import fetch from 'node-fetch';
import { Inverter } from './models/inverter';
import { getTimestamp, log } from './utils';
import { MongoClient, MongoServerError } from 'mongodb';
import { airco } from './aircon';
import { Thermostat } from './models/thermostat';
import { readFileSync } from 'fs';
import { wifi } from './wifi';

let inverterInterval:object     = null;
let thermoInterval:object       = null;

const json = readFileSync('config.json');
const config = JSON.parse(json.toString());

const powerOn = async(currentWh:number) => {

    log(`Enough solar power is available! Wh:${currentWh} minWh:${config.solar.minWh}`);
    airco.powerOn(22);
}

const powerOff = async(currentWh:number) => {

    const phones = await wifi.findPhone(config.wifi);
    if (phones <= 0) {

        if (config.cycles.holdInterval) {
    
            if (config.cycles.currentState > (config.cycles.holdOffline * 60 * 1000)) {
                config.cycles.currentState = 0;
                clearInterval(config.cycles.holdInterval);
                config.cycles.holdInterval = null;
            }
        } else {
    
            const intervalTimer = (config.ticker * 60 * 1000);
            config.cycles.holdInterval = setInterval(()=>{ config.cycles.currentState = config.cycles.currentState + intervalTimer; }, intervalTimer);
        }
    
        log(`Not enough solar power, shutting down the aircon. Wh:${currentWh}`);
        airco.powerOff(currentWh);
    } else {
        
        log(`Not enough solar power, but not shutting the aircon down, ${phones} phones detected. Wh:${currentWh}`);
    }


}

const getThermostatData = async() => {

    const body                      = await fetch(config.solar.api, {timeout: 2000});
    const thermostat:Thermostat     = await body.json();
    return thermostat;
}

const insertDatabaseRecord = async ( ticker:boolean, currentWh:number ) => {

    if (ticker) {

        // Insert values into database every 5 minutes
        const mongo:MongoClient = new MongoClient(config.database.uri);

        mongo.connect();
        mongo.db(config.database.db);

        const collection = mongo.db(config.database.db).collection(config.database.collection.airco);

        try {

            const isOn:boolean = airco.getPowerStatus();
            const data = { timestamp: getTimestamp(), Wh: (<number>currentWh), status: (isOn !== false) ? 'on' : 'off', expected: (currentWh >= config.solar.minWh) ? 'on' : 'off' };
            log(`Inserting data into MongoDB collection:${config.database.collection.airco}`, data);

            await collection.insertOne(data);
        } catch (error) {

            if (error instanceof MongoServerError) {
                console.log(`MongoDB Error: ${error}`);
            }
        }
        mongo.close();
    }

}

const powerCycle = (thermostat:Thermostat, currentWh:number) => {

    try {

        assert(currentWh >= config.solar.minWh,                     'Not enough solar power');
        assert(thermostat.thermostat.currentSetpoint == 1800,       'Thermostat is set too high, waste gas much?');
        assert(thermostat.thermostat.currentSetpoint >= 2300,       'Livingroom is cold enough, why bother cooling down further?');
        assert(config.cycles.holdOffline > 0,                       'Must let the outdoor unit / compressor warm-up again before we turn it on');

        if ( thermostat.thermostat.currentSetpoint >= 2300 && thermostat.thermostat.currentSetpoint == 1800)    powerOn(currentWh);
    } catch (error) {

        log('Not enough solar power is available', error);
        powerOff(currentWh);
    }
}

const getInverterData = async(ticker:boolean = false) => {

    const body                      = await fetch(config.solar.api, {timeout: 2000});
    const inverters:Inverter[]      = await body.json();
    const thermostat:Thermostat     = await getThermostatData();
    
    let currentWh:number = 0;

    if (inverters) {
        
        // Determine Wattage/hour
        for (let inverter of inverters) {

            try {

                assert(typeof(inverter) === 'object', 'No data for inverter');
                currentWh += inverter.Wh.current;
            } catch( error ) {

                log(`No data available for inverter!`);
            }
        }

        insertDatabaseRecord(ticker, currentWh);
        powerCycle(thermostat, currentWh);
    }
};

// Starting up!
log(`SolarAircon V1.00 started with config`, config);
getInverterData();
setInterval(()=>{ inverterInterval = getInverterData(true); }, config.ticker * 60 * 1000);