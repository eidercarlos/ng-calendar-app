export class appointment{
    id: number;
    title: string;
    date: Date;
    timeToBegin: string;
    timeToEnd: string;
    description: string;

    constructor() {
        this.id = new Date().getTime();     
        this.title = "";
        this.date = new Date();
        this.timeToBegin = "";
        this.timeToEnd = "";
        this.description = "";
    }
}