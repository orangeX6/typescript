// # 26 More on Annotations Around Functions
// # 27 Inference Around Functions
// # 28 Annotations for Anonymous Functions
// # 29 Void and Never
// # 30 Destructuring with Annotations

//>> # 20 Annotations around functions
// The annotation which we wrote here is for the variable, where we are saying this variable will take a function with the parameter i as number and will not return anything
// Its basically modifying the variable
// const logNumber: (i: number) => void = (i: number) => {
//   console.log(i);
// };

// #26 More on Annotations around functions
// const add = (a: number, b: number): number => {
//   return a + b;
// };

// #27 Inference around functions
const add = (a: number, b: number): number => {
  return a + b;
};

// #28 Annotations for anonymous functions
function divide(a: number, b: number): number {
  return a / b;
}
console.log(divide(80, 10));

const multiply = function (a: number, b: number): number {
  return a * b;
};

// #29 Void and Never
const logger = (message: string): void => {
  console.log(message);
};

const throwError = (message: string): never => {
  throw new Error(message);
};

const throwErrorString = (message: string): string => {
  if (!message) throw new Error(message);
  return message;
};

const throwErrorVoid = (message: string): void => {
  if (!message) throw new Error(message);
};

// #30 Destructuring with annotations
const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};

// Without destructuring
// const logWeather = (forecast: { date: Date; weather: string }): void => {
//   console.log(forecast.date);
//   console.log(forecast.weather);
// };

// With Destructuring
// prettier-ignore
const logWeather = ({ date, weather }: { date: Date; weather: string }): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);
