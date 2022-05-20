import { readFileSync } from "fs";

const { NodeSSH } = require('node-ssh');

const json = readFileSync('config.json');
const config = JSON.parse(json.toString());

type IWInfo = {
    /** IP address */
    ap: string;
    /** 5G band (n/a/c) */
    nac: string[];
    /** 2.4G band (b/g) */
    bg: string[];
};

class Rig {

    private vals            = {
        beneden: {
            low: 100,
            high: 0
        },
        boven: {
            low: 100,
            high: 0        
        }
    };    

    getAssocList() {

        return new Promise(async (resolve, _reject)=>{

            const obtainedClients = [];
            
            for (let host of config.wifi.ap) {
        
                obtainedClients.push( 
                    
                    new Promise((internalResolve)=>{

                        const ssh = new NodeSSH();
                        let connection = ssh.connect({
                            host: host,
                            username: config.wifi.username,
                            password: config.wifi.password
                        });
                
                
                        connection.then(async (conn:any)=>{
                
                            let wlan0 = await conn.execCommand('iwinfo wlan0 assoclist');
                            let wlan1 = await conn.execCommand('iwinfo wlan1 assoclist');
                
                            wlan0 = wlan0.stdout ?? wlan0.stderr;
                            wlan1 = wlan1.stdout ?? wlan1.stderr;

                            const connectedClients = {
                                ap: host,
                                nac: wlan0.match(/.{2,2}\:.{2,2}\:.{2,2}\:.{2,2}:.{2,2}\:.{2,2}  \d+ dBm/g),
                                bg: wlan1.match(/.{2,2}\:.{2,2}\:.{2,2}\:.{2,2}:.{2,2}\:.{2,2}  -\d+ dBm/g)
                            };

                            conn.dispose();
                            conn = null;
                            connection = null;

                            internalResolve(connectedClients);
                        });
                    })
                );
            }
            
            resolve (await Promise.all(obtainedClients));
        });        
    }

    locatePhone = (dBm:string, ap:string, band:string) => {
        
        const dB:number     = +dBm.match(/\d+/)[0];
        let room:string     = '';
        let floor:string    = '';
    
        if (ap == '172.168.25.2' && band == '5G') {
    
            this.vals.beneden.low = (dB < this.vals.beneden.low) ? dB : this.vals.beneden.low;
            this.vals.beneden.high = (dB > this.vals.beneden.high) ? dB : this.vals.beneden.high;
    
            if (dB >= 38 && dB <= 45) {
                room = 'Tafel / computer';
            } else if (dB > 45) {
                room = 'Keuken';
            } else if (dB < 38) {
                room = 'Bank';
            }        
            floor = 'Beneden';
        }
    
        if (ap == '172.168.25.2' && band == '2.4G') {
            room = 'Buiten'; 
            floor = 'Beneden';
        }
    
        if (ap == '172.168.25.3' && band == '5G') {
    
            this.vals.boven.low = (dB < this.vals.boven.low) ? dB : this.vals.boven.low;
            this.vals.boven.high = (dB > this.vals.boven.high) ? dB : this.vals.boven.high;
    
            if (dB > 45) {
                room = 'Poezenkamer';
            }
            if (dB >= 35 && dB <= 45 ) {
                room = 'Slaapkamer';
            }
            if (dB > 31 && dB < 35) {
                room = 'Logeerkamer';
            }
            if (dB < 31) {
                room = 'Badkamer';
            }
            floor = 'Boven';        
        }
    
        if (ap == '172.168.25.3' && band == '2.4G') {
            room = 'Zolder';
            floor = 'Boven';
        }
    
        console.log(floor, band, room, dB, 'boven', this.vals.beneden, 'beneden', this.vals.boven);
    }    

    findPhone = (config:any) => {

        return new Promise((resolve, _reject)=>{
            wifi.getAssocList().then((assoc:IWInfo[])=>{
    
                const activePhones = [];
    
                for(let ap of assoc) {
                
                    for (let phone of config.phones) {
    
                        if (ap.nac !== null) {
                            const foundPhone = ap.nac.find(mac => mac.match(phone.mac));
                            if (foundPhone) {
                                const dBm = foundPhone.match(/\d+ dBm/)[0];
                                activePhones.push({band: '5G', owner: phone.owner, phone: phone.type, dBm: dBm});
                                this.locatePhone(dBm, ap.ap, '5G');
                            }
                        }
    
                        if (ap.bg !== null) {
                            const foundPhone = ap.bg.find(mac => mac.match(phone.mac));
                            if (foundPhone) {
                                const dBm = foundPhone.match(/\d+ dBm/)[0];
                                activePhones.push({band: '2.4G', owner: phone.owner, phone: phone.type, dBm: dBm});
                                this.locatePhone(dBm, ap.ap, '2.4G');
                            }
                        }
                    }
                }
                resolve(activePhones.length);
            });
        });
    };
}

const wifi = new Rig();

export { wifi }