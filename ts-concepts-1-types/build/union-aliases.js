"use strict";
// _ UNION TYPES, LITERAL TYPES, TYPE ALIASING
// -> UNION TYPES
function combine(n1, n2, 
//-> LITERAL TYPE
//resultConversion: 'as-number' | 'as-text'
resultConversion) {
    let result;
    if ((typeof n1 === 'number' && typeof n2 === 'number') ||
        resultConversion === 'as-number')
        result = +n1 + +n2;
    else
        result = n1.toString() + n2.toString();
    // if (resultConversion === 'as-number') {
    //   return +result;
    // } else {
    //   return result.toString();
    // }
    return result;
}
const combinedAges = combine(20, 56, 'as-number');
console.log(combinedAges);
const combinedStringsAges = combine('20', '56', 'as-number');
console.log(combinedStringsAges);
const combinedNames = combine('Max', 'Ana', 'as-text');
console.log(combinedNames);
//# sourceMappingURL=union-aliases.js.map