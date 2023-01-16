const someNumber: number = 1;
let someWord: string = 'Hello';
let someQuestion: boolean = true;
console.log(someWord.length);

const somePhrase = (word: string, digit: number): string => {
    return word + digit;
}

const numbers: number[] = [1, 2, 3];

console.log(somePhrase('Hello user', 1));

let a: any = 'word';
a = 1;

type textOrNumber = string | number;
let b: textOrNumber = 'Hello';
//let c: textOrNumber = [];

export {};


