// class Boat {
//   color: string = 'red';

//   get formattedColor(): string {
//     return `This boat color is ${this.color}`;
//   }

//   // the decorator just executes the function with the following args -  testDecorator(Boat.prototype, 'pilot');
//   @testDecorator
//   pilot(): void {
//     console.log('swish');
//   }
// }

// function testDecorator(target: any, key: string): void {
//   console.log('Target', target);
//   console.log('Key:', key);
// }
// testDecorator(Boat.prototype, 'pilot');

@classDecorator
class Boat {
  @testDecorator
  color: string = 'red';

  @testDecorator
  get formattedColor(): string {
    return `This boat color is ${this.color}`;
  }

  yolo() {
    console.log('EXP');
  }
  // the decorator just executes the function with the following args -  testDecorator(Boat.prototype, 'pilot');
  @logError('Oops boar was sunk in ocean')
  pilot(
    @parameterDecorator speed: string,
    @parameterDecorator generateWake: boolean
  ): void {
    // throw new Error();
    if (speed === 'fast') console.log('swish');
    else console.log('nothing');
  }
}

function testDecorator(target: any, key: string): void {
  console.log(target);
  console.log(key);
}

function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    console.log(target, key, desc, 'GGGGGGGGGGGGGG');
    const method = desc.value;
    desc.value = function () {
      try {
        method('fast', true);
      } catch (e) {
        console.log(errorMessage);
      }
    };
  };
}

// Apply decorator on parameter
function parameterDecorator(target: any, key: string, index: number) {
  console.log(key, index);
}

// Apply decorator to class
function classDecorator(constructor: typeof Boat) {
  console.log(constructor);
}

new Boat().pilot('fast', true);
