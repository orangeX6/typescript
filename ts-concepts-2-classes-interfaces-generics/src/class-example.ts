// class Department {
//   name: string;

//   constructor(name: string) {
//     this.name = name;
//   }

//   describe(this: Department): void {
//     console.log(`Department: ${this.name}`);
//   }
// }

// const accounting = new Department('Accounting');
// console.log(accounting);
// accounting.describe();

// const accountingCopy = { name: 'Dummy', describe: accounting.describe };
// // >> will work once name is specified in accountingCopy, Else
// //-> Will return undefined if we don't pass this as a parameter to describe.
// //! Gives error when we specify what this should refer to in params on describe method definition
// accountingCopy.describe();
