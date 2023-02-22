export class appointment{
    title: string;
    date: Date;
    timeToBeginHour: number;
    timeToBeginMinutes: number;
    timeToEndHour: number;
    timeToEndMinutes: number;
    description: string;

    constructor() {        
        this.title = "";
        this.date = new Date();
        this.timeToBeginHour = 0;
        this.timeToBeginMinutes = 0;
        this.timeToEndHour = 0;
        this.timeToEndMinutes = 0;
        this.description = "";
    }
}