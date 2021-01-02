let str: string = 'hello typescript'
let num: number = 42
let bool: boolean = true

let strArray: string[] = ['H', "e", 'l']

let numArray: Array<number> = [1, 1, 2, 3]

function logInfo(name: String, age: number): void {
    console.log(`Info: ${name}, ${age}`)
}

logInfo("Vladilen", 25)

function calc(a: number, b: number | string): number {
    if (typeof b === 'string') b = +b
    return a + b
}

console.log(calc(2, 5))