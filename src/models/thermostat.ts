type Power = {
    /** epoch */
    timestamp: number;
    /** unit (W) */
    unit: string;
    /** value 0000.00 */
    value: number;
}

type Gas = {
    /** epoch */
    timestamp: number;
    /** unit (l) */
    unit: string;
    /** value 0000.00 */
    value: number;
}

export interface Thermostat {
    power: {
        usage: {
            hours: Power[]
        }
    },
    thermostat: {
        currentTemp: number|null,
        /** 1800 */
        currentSetpoint: number,
        currentHumidity: number|null,
        currentDisplayTemp: number,
        programState: number,
        activeState: number,
        nextProgram: number,
        nextState: number,
        nextTime: number,
        nextSetpoint: number,
        randomConfigId: null,
        hasBoilerFault: number,
        errorFound: number,
        boilerModuleConnected: number,
        /** 1800 */
        realSetpoint: number,
        burnerInfo: number, 
        otCommError: number,
        i2CError: number,
        currentModulationLevel: number,
        haveOTBoiler: number,
        lastUpdatedFromDisplay: number,
        setByLoadShifting: number
    },
    gas: {
        usage: {
            hours: Gas[]
        }
    }
}