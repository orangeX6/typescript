// _ UNION TYPES, LITERAL TYPES, TYPE ALIASING

//-> TYPE ALIASES
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

// -> UNION TYPES
function combine(
  n1: Combinable,
  n2: Combinable,
  //-> LITERAL TYPE
  //resultConversion: 'as-number' | 'as-text'
  resultConversion: ConversionDescriptor
) {
  let result;
  if (
    (typeof n1 === 'number' && typeof n2 === 'number') ||
    resultConversion === 'as-number'
  )
    result = +n1 + +n2;
  else result = n1.toString() + n2.toString();

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
