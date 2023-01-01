"use strict";
// _ FUNCTION RETURN TYPES & VOID
function addNumbers(n1, n2) {
    return n1 + n2;
}
// Void type
function printAdditionResult(num) {
    console.log('Result ' + num);
}
printAdditionResult(addNumbers(34, 35));
console.log(printAdditionResult(addNumbers(34, 35))); // returns undefined
//_ FUNCTIONS AS TYPES
// let combinedValues: Function;
let combinedValues;
combinedValues = addNumbers;
// combinedValues = printAdditionResult;
// combinedValues = 6;
console.log(combinedValues(9, 9));
//_ FUNCTION TYPES AND CALLBACKS
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, (res) => console.log(res));
//# sourceMappingURL=function.js.map