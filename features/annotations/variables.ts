//-> Primitives
// >> number
let apples: number = 6;
let oranges: number;
// const applesOne: number = true
apples = 9;
// apples = 'sixty';

//>> string
let speed: string = 'sixty';
// speed = 6;
// speed = true;

//>> boolean
let hasName: boolean = true;

//>> null
let nothingMuch: null = null;
// nothingMuch: null = undefined;

//>> undefined
// let not: undefined;
let nothing: undefined = undefined;

//-> Built in objects
let now: Date = new Date();

//-> Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [7, 9, 6];
let truths: boolean[] = [true, true, false];

//-> Classes
class Car {}
let car: Car = new Car();

//-> Object literal (keys should be x or y and their values should be numbers, no other key will work)
let point: { x: number; y: number } = {
  x: 10,
  // y: 'String',
  y: 20,
  // z: 35,
};

//-> Function
// The annotation which we wrote here is for the variable, where we are saying this variable will take a function with the parameter i as number and will not return anything
// Its basically modifying the variable
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

//_ WHEN TO USE ANNOTATIONS
//_ 1) Function that returns the 'any' type
// # 22 - The any type & 24 - Fixing the any type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

//_ 2) When we declare a variable on one line and initialize it later
// # 24 - Delayed initialization
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

//_ 3) Variable whose type cannot be inferred correctly
// # 25 - Inference doesn't work (THIS WILL RARELY BE THE CASE)
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
