interface SayHello {
    sayHello:() => void
}

class User implements SayHello{
    constructor(private name: string, private age: number) {
    }

    sayHello(): void {
        console.log("hello from user "+this.name)
    }
}