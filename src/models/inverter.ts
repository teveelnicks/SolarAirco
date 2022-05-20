export interface Inverter {
    name: string;
    Wh: {
        current: number;
        today: number;
    },
    serial: string;
    status: string;
}