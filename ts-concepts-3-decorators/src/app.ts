//_ ------------- PROPERTY DECORATOR -----------
function Log(target: Product, propertyName: string | Symbol) {
  console.log(`Property Decorator`);
  console.log(target, propertyName);
}

//_ ------------- ACCESSOR DECORATOR -----------
function Log2(target: any, key: string, descriptor: PropertyDescriptor) {
  console.log('Accessor Decorator');
  console.log(target, key, descriptor);
}

//_ ------------- METHOD DECORATOR -----------
function Log3(
  target: any,
  key: string,
  descriptor: PropertyDescriptor
): PropertyDescriptor {
  console.log('Function Decorator');
  console.log(target, key, descriptor);
}

//_ ------------- PARAMETER DECORATOR -----------
function Log4(target: any, key: string, index: number) {
  console.log('Parameter Decorator');
  console.log(target, key, index);
}

class Product {
  @Log
  title: string;

  constructor(title: string, public _price: number) {
    this.title = title;
  }

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error(`Invalid price! Price should not be negative`);
    }
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

//_ ----------- CLASS DECORATORS ------------------
//_ 1
function Logger(logString: string) {
  console.log('INITIATING LOGGER');
  return function (constructor: typeof Person) {
    console.log(logString);
    console.log(constructor);
  };
}

//_ 2
//_ RETURNING AND CHAINING A CLASS IN A CLASS DECORATOR (RETURN VALUES FROM DECORATOR)
type Constructor<T = { name: string }> = new (...args: any[]) => T;

function WithFactory(template: string, hookId: string) {
  console.log('INITIATING FACTORY DECORATOR');
  return function <T extends Constructor>(target: T) {
    return class extends target {
      constructor(..._: any[]) {
        super(50);
        const hookEl = document.getElementById(hookId);
        // console.log(new target(50));
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector('h1')!.textContent = this.name;
        }
      }
    };
  };
}

@Logger('Logger Decorator')
@WithFactory('<h1>This will be displayed</h1>', 'app')
class Person {
  name = 'Orange';
  dob: number;
  constructor(age: number) {
    this.dob = new Date().getFullYear() - age;
    console.log('Creating person object...');
  }
}

const person = new Person(50);
console.log(person);

//_ ------------- METHOD DECORATOR WITH RETURN VALUE -----------
function Autobind(
  target: any,
  key: string,
  descriptor: PropertyDescriptor
): PropertyDescriptor {
  const originalMethod = descriptor.value;
  const adjustedDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjustedDescriptor;
}

@Autobind
class Printer {
  message = 'This works';

  showMessage() {
    console.log(this.message);
  }
}
const p = new Printer();
const button = document.querySelector('button')!;
// button.addEventListener('click', p.showMessage.bind(p));
button.addEventListener('click', p.showMessage.bind(p));
