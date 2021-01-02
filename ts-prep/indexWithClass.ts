class Server {
    static VERSION = '1.0.3'
    public name: string
    protected ip: number

    constructor(name: string, ip: number) {
        this.name = name
        this.ip = ip
    }
    private status: string = 'working'
/*
    constructor(public name: string, protected ip: number) {
    }*/  //we can use instead setting variables and constructor


    public turnOn() {
        this.status = 'working'
    }

    protected turnOff() {
        this.status = 'offline'
    }

    public getStatus(): string {
        return this.status
    }


}

const server: Server = new Server('AWS', 1234)