// # INTERSECTION TYPES
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const employee1: ElevatedEmployee = {
  name: 'Zyra',
  privileges: ['read', 'write'],
  startDate: new Date(),
};

console.log(employee1);

//################################
//# The above using Interfaces
//################################
interface IAdmin {
  name: string;
  privileges: string[];
}

interface IEmployee {
  name: string;
  startDate: Date;
}

interface IElevatedEmployee extends IAdmin, IEmployee {}

const employeeTwo: IElevatedEmployee = {
  name: 'Zyra',
  privileges: ['read', 'write'],
  startDate: new Date(),
};

console.log(employeeTwo);

// ##################################
// ##################################
// ##################################
//# in case of union type, returns types in common, number in our case
type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

// ########## TYPE GUARDS
// _1
function addFnTwo(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

addFnTwo(10, 9);

// _ 2
type UnknownEmployee = Employee | Admin;
function printEmployeeInformation(emp: UnknownEmployee) {
  console.log('Name:' + emp.name);

  if ('privileges' in emp) console.log(`Privileges: ${emp.privileges}`);

  if ('startDate' in emp) console.log(`Start Date: ${emp.startDate}`);
}

const e3: Employee = { name: 'Zod', startDate: new Date() };
printEmployeeInformation(employeeTwo);
printEmployeeInformation(e3);
console.log(Object.keys(employeeTwo).includes('a'));

//_ 3
class Car {
  drive() {
    console.log('Driving a Car');
  }
}
class Truck {
  drive() {
    console.log('Driving a Car');
  }

  loadCargo(amount: number) {
    console.log('Loading Cargo...' + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  //_ SOLUTION 1
  // if ('loadCargo' in vehicle) {
  //   vehicle.loadCargo(1000);
  // }

  //_ SOLUTION 2
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

// ########## DISCRIMINATED UNION
//_ Discriminated Unions
interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
      break;
    default:
      speed = 0;
  }
  console.log('Moving at speed ' + speed);
}

moveAnimal({ type: 'bird', flyingSpeed: 90 });

// ############### TYPE CASTING
const para = document.querySelector('p')!;
para.textContent = 'Hi';
// _SOLUTION 1
// const input = <HTMLInputElement>document.getElementById('user-input')!;
//_ SOLUTION 2
// const input = document.getElementById('user-input')! as HTMLInputElement;
const input = document.getElementById('user-input');
if (input) {
  (input as HTMLInputElement).value = 'SwordArt';
}

// ############### INDEX PROPERTIES
interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: 'Not a valid email',
  username: 'Must have at least 6 characters',
};
