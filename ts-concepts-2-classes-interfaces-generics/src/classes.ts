// abstract class Department {
//   static fiscalYear = 2022;
//   name: string;

//   constructor(
//     protected readonly id: string,
//     name: string,
//     protected employees: string[] = []
//   ) {
//     this.name = name;
//   }

//   // describe(this: Department): void {
//   //   console.log(`Department [${this.id}]:${this.name}`);
//   // }

//   addEmployee(employee: string) {
//     this.employees.push(employee);
//   }

//   printEmployeeInformation() {
//     console.log(this.employees.length);
//     console.log(this.employees);
//   }

//   abstract describe(this: Department): void;
// }

// class ITDepartment extends Department {
//   constructor(id: string, public admins: string[]) {
//     super(id, 'IT');
//   }

//   static about() {
//     console.log('This is IT Department');
//   }

//   describe(this: ITDepartment): void {
//     console.log(`Department [${this.id}]:${this.name}`);
//   }
// }

// class AccountingDepartment extends Department {
//   private _lastReport: string;

//   private static instance: AccountingDepartment;

//   private constructor(id: string, private reports: string[]) {
//     super(id, 'Accounting');
//     this._lastReport = reports[0];
//   }

//   static getInstance() {
//     if (this.instance) {
//       return this.instance;
//     }
//     this.instance = new AccountingDepartment('d2', []);
//     return this.instance;
//   }

//   get lastReport() {
//     if (this._lastReport) return this._lastReport;

//     throw new Error('No report found');
//   }

//   set lastReport(value: string) {
//     this.addReport(value);
//   }

//   addReport(text: string) {
//     this.reports.push(text);
//     this._lastReport = text;
//   }

//   printReports() {
//     console.log(this.reports);
//   }

//   addEmployee(name: string): void {
//     if (name === 'orange') return;
//     this.employees.push(name);
//   }

//   describe(this: AccountingDepartment): void {
//     console.log(`Department [${this.id}]:${this.name}`);
//   }
// }

// // const accounting = new Department('d1', 'IT', ['e1']);
// const itDept = new ITDepartment('d1', ['a1', 'a2']);
// console.log(itDept);
// itDept.describe();
// itDept.addEmployee('e2');
// itDept.printEmployeeInformation();
// ITDepartment.about();

// //! Wont work as we have made the constructor private
// //-> We ll instead use static methods to instantiate the class
// // const accounting = new AccountingDepartment('d2', []);
// const accounting = AccountingDepartment.getInstance();
// const accounting2 = AccountingDepartment.getInstance();
// console.log(accounting, accounting2);
// accounting.addReport('New Report incoming');
// accounting.lastReport = 'Another report';
// console.log(accounting.lastReport);
// accounting.printReports();
// accounting.addEmployee('e-acc-2');
// accounting.addEmployee('orange');
// accounting.addEmployee('anyone else');
// accounting.printEmployeeInformation();
