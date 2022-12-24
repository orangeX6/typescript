// import 'reflect-metadata';

// const plane = {
//   color: 'red',
// };

// // Reflect.defineMetadata('note', 'hi there', plane);
// // Reflect.defineMetadata('height', 10, plane);

// // const note = Reflect.getMetadata('note', plane);
// // const height = Reflect.getMetadata('height', plane);
// // console.log(note, height);

// Reflect.defineMetadata('note', 'hi there, i am red', plane, 'color');
// const colorDesc = Reflect.getMetadata('note', plane, 'color');
// console.log(colorDesc);

//-> WITH TYPESCRIPT
import 'reflect-metadata';

@printMetadata
class Plane {
  color: string = 'red';

  @planeDecorator('Is that a plane?')
  fly(): void {
    console.log('VRRRRRRRRR');
  }
}

function planeDecorator(secretInfo: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata('secret', secretInfo, target, key);
  };
}

// const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly');
// console.log(secret);

function printMetadata(target: typeof Plane) {
  for (const key in target.prototype) {
    const secret = Reflect.getMetadata('secret', target.prototype, key);
    console.log(secret);
  }
}
