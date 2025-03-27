export class Logger {
    private readonly context: any;
    constructor(context: any) {
        this.context = context;
    }

    log(text : string, stringify: boolean = true) {
        let logText = stringify ? JSON.stringify(text) : text;
        console.log(`[${this.context}] ${logText}`);
    }
}