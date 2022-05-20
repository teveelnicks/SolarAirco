const log = (str:string, obj:any = '') => {
    console.log(`[${getTimestamp()}] ${str}`, obj);
}
    
const getTimestamp = () => {
    const d = new Date();
    d.setTime(d.getTime() + (2 * 3600 * 1000) );
    const time = d.toISOString().split('.')[0].split('T');
    return time[0] + ' ' +time[1]; 
}

const getTime = () => {
    const d = new Date();
    d.setTime(d.getTime() + (2 * 3600 * 1000) );
    const time = d.toISOString().split('T');
    return time[1].split('.')[0];
}

const getDate = () => {
    const d = new Date();
    const date = d.toISOString().split('T')[0];
    return date;
}

export { getTime, getDate, getTimestamp, log };