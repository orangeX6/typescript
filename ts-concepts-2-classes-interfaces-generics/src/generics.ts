// _ JS ALREADY HAVE 2 GENERIC TYPES
const fruits: Array<string> = ['Orange', 'Apples'];
console.log(fruits);

const promise: Promise<string> = new Promise((resolve, _) => {
  setTimeout(() => {
    resolve('Done...');
  }, 2000);
});

promise.then((data) => console.log(data.split('o')));

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });
console.log(mergedObj);

// # ANOTHER GENERICS FUNCTION
interface lengthy {
  length: number;
}

function countAndPrint<T extends lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value.';
  if (element.length === 1) {
    descriptionText = 'Got one element';
  } else if (element.length > 1) {
    descriptionText = 'Got ' + element.length + ' elements.';
  }
  return [element, descriptionText];
}

console.log(countAndPrint('Hi There!'));
console.log(countAndPrint(['Hi There!', 'One more']));
console.log(countAndPrint([]));
// console.log(countAndPrint(0)); //!ERROR

// # CONSTRAINTS KEY OF
function extractAndConvert<T extends object, K extends keyof T>(
  obj: T,
  key: K
) {
  return 'value: ' + obj[key];
}

extractAndConvert({ name: 'SSS' }, 'name');
console.log(extractAndConvert({ name: 'SSS' }, 'name'));

// # GENERIC CLASSES
class ItemStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  replaceItem(item: T, itemTwo: T) {
    this.data.splice(this.data.indexOf(item), 1, itemTwo);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new ItemStorage<string>();
textStorage.addItem('Apple');
textStorage.addItem('Pear');
console.log(textStorage.getItems());
textStorage.replaceItem('Pear', 'Coconut');
console.log(textStorage.getItems());

// const objStorage = new ItemStorage<object>();
// const maxObj = { name: 'Max' };
// objStorage.addItem(maxObj);
// objStorage.addItem({ name: 'Orange' });
// objStorage.removeItem(maxObj);
// console.log(objStorage.getItems());

// # UTILITY GENERIC TYPES
// _ PARTIAL
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;

  return courseGoal as CourseGoal;
}

//_ READONLY
const tropicalFruits: Readonly<string[]> = ['Mango', 'JackFruit'];
// tropicalFruits.push('Lemon'); //!ERROR
