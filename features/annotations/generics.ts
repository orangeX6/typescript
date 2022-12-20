class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

// -> Generics
class ArrayOfAnything<T> {
  constructor(public Collection: T[]) {}

  get(index: number): T {
    return this.Collection[index];
  }
}

const stringArr = new ArrayOfAnything<string>(['a', 'b', 'c']);
console.log(stringArr.get(1));

// Type inference (Works on generics)
const stringArrTwo = new ArrayOfAnything(['a', 'b', 'c']);

//-> Example of generics with functions
//! WITHOUT GENERICS
function printStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

//-> WITH GENERICS
function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

const numberArr = printAnything([1, 2, 3]);
const stringArrFunc = printAnything<string>(['a', 'p', 's']);

// -> GENERIC CONSTRAINTS
class Car {
  print() {
    console.log(' I am a Car ');
  }
}

class House {
  print() {
    console.log(' I am a house ');
  }
}

interface Printable {
  print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

printHousesOrCars([new House(), new House(), new Car()]);
// This works because both car and house have same blueprint/. More in qna.txt //142
printHousesOrCars<Car>([new House(), new House(), new Car()]);
