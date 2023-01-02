interface Named {
  readonly name?: string;
}

interface Greetable extends Named {
  age?: number;
  greet(phrase: string): void;
}

interface Work {
  work?: string;
  play?: string;
}

// Class based on interface
class Person implements Greetable, Work {
  work = 'dev';

  constructor(public age: number, public readonly name?: string) {}

  greet(phrase: string): void {
    console.log(phrase);
  }
}

// Object based on interface
let user1: Greetable;
user1 = {
  name: 'John',
  age: 40,
  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  },
};
user1.greet('Hi there - I am');

const user2 = new Person(28, 'Yua');
// user2.name = 'naruto';
console.log(user2);

//_ Interfaces as Function Types
//>> USING TYPES
// type AddFn = (a: number, b: number) => number;
//>> USING INTERFACE
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (a: number, b: number) => {
  return a + b;
};
