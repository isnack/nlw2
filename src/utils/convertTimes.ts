export default function convertHourToMinutes (time: string) {
    const [hour,minutes] = time.split(':').map(Number);
    const timeInMinutes = (hour * 60) + minutes;

    return timeInMinutes
}

export function convertMinutesToHour (timeInMinutes:number){
    const hours = (timeInMinutes)/60;
    const rHours = Math.floor(hours);
    const minutes = (hours - rHours) * 60;
    const rMinutes = Math.floor(minutes);
    const formatedHours = rHours < 10 ? '0' + rHours : rHours;
    const formatedMinutes = rMinutes < 10 ? '0' + rMinutes : rMinutes;
    return `${formatedHours}:${formatedMinutes}`;
}