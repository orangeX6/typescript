"use strict";
function makeDate(mOrTimestamp, d, y) {
    if (d !== undefined && y !== undefined) {
        return new Date(y, mOrTimestamp, d);
    }
    else {
        return new Date(mOrTimestamp);
    }
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
function add(a, b) {
    return a + b;
}
add(1, 2); // Number
add('foo', 'bar'); // String
// add('there', 4);
//# sourceMappingURL=functionOverloads.js.map