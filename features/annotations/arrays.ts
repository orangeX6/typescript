// #32 Arrays in TypeScript
const carMakers: string[] = ['BMW', 'Tata', 'Hyundai'];
// const carMakers = [];
// const carMakers: string[] = [];

const dates = [new Date(), new Date()];
const carsByMake = [['f150'], ['corolla'], ['camaro']];
const carsByMakeEmpty: string[][] = [];

// #33 Why Typed Arrays?
//_ Help with inference when extracting values
const carOne = carMakers[0];
const myCar = carMakers.pop();

//_ prevent incompatible values
// carMakers.push(100);

//_ Help with map
carMakers.map((car) => car.toUpperCase());
console.log(carMakers);

// #34 Multiple types in Arrays
//_ Flexible Types
const importantDates = [new Date(), '2030-10-10']; // Takes date or string
const anotherFlexArray = ['Dragon', 09]; // Takes string or number
const importantDatesAnnotate: (Date | string)[] = [new Date()]; // Takes date or string
importantDatesAnnotate.push('2010-10-12');
importantDatesAnnotate.push(new Date());
// importantDatesAnnotate.push(4233);

// #35 When to Use Typed Arrays
