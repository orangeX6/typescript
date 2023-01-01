// _ FUNCTION RETURN TYPES & VOID

function addNumbers(n1: number, n2: number): number {
  return n1 + n2;
}

// Void type
function printAdditionResult(num: number): void {
  console.log('Result ' + num);
}

printAdditionResult(addNumbers(34, 35));

console.log(printAdditionResult(addNumbers(34, 35))); // returns undefined

//_ FUNCTIONS AS TYPES
// let combinedValues: Function;
let combinedValues: (num1: number, num2: number) => number;
combinedValues = addNumbers;
// combinedValues = printAdditionResult;
// combinedValues = 6;
console.log(combinedValues(9, 9));

//_ FUNCTION TYPES AND CALLBACKS
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (res) => console.log(res));
