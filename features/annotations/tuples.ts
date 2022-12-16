// # 37 Tuples in Action

//Object (This works but we can also use tuples)
const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

//Array
const pepsi = ['brown', true, 40];
pepsi[0] = 40;
pepsi[2] = 'brown';
// Here since position of color and sugar is changed, we have lost info

//-> Tuples
const cola: [string, boolean, number] = ['dark-brown', true, 40];
// cola[0] = 40;

// Alternate way of writing this is, rather than putting the type directly in line as an annotation, we can create a type alias
type Drink = [string, boolean, number];
const sprite: Drink = ['clear', true, 40];
const cola2: Drink = ['dark-brown', true, 40];
const tea: Drink = ['brown', false, 0];

const carSpecs: [number, number] = [300, 3354];
const carStats = {
  horsePower: 400,
  weight: 3354,
};
