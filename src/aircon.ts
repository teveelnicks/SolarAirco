import { FanSpeed, HaierAC, Mode } from 'haier-ac-remote';
import { State } from 'haier-ac-remote/dist/_types';

class Aircon {
    
    private haierAC:HaierAC;
    private currentState:State;

    noop = (tijd = 1) => setTimeout(()=>{}, 1000 * tijd);

    constructor() {

        this.haierAC = new HaierAC({
            ip: '172.168.25.211',
            mac: '0007A8E503A0',
            timeout: 15000
        });
        this.currentState = this.haierAC.state$.getValue();
        this.haierAC.state$.subscribe(this.stateChange);
    }

    public getPowerStatus() {

        this.currentState = this.haierAC.state$.getValue();
        return this.currentState.power;
    }

    private async stateChange(state:any) {

        // console.log(`Updating aircon state from`, this.currentState, `to`, state);
        this.currentState = state;
    }
    
    public async powerOn(celcius = 2) {
        
        this.currentState = ((<State>{ ...this.currentState, targetTemperature:+celcius, fanSpeed: FanSpeed.AUTO, mode:Mode.COOL, power: true}));
        return await this.haierAC.on();
    }

    public async powerOff(_currentWh:number) {

        this.currentState = ((<State>{ ...this.currentState, power: false}));
        return await this.haierAC.off();
    }    

    public async setTemperature(celcius:number) {

        return await this.haierAC.changeState((<State>{ ...this.currentState, fanSpeed: FanSpeed.AUTO, mode:Mode.COOL, targetTemperature:+celcius }));
    }
}

const airco = new Aircon();

export { airco }