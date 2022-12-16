class VehicleCl {
  // color: string;
  // constructor(color: string) {
  //   this.color = color;
  // }
  //IMPORTANT An equivalent way of writing the above 4 lines is by declaring the color public in constructor arguments. Just like methods, modifiers can be applied to fields as well
  constructor(public color: string) {}
  // constructor(protected color: string) {}
  // constructor(private color: string) {}

  public drive(): void {
    console.log('Vrooomm...');
  }

  protected honk(): void {
    console.log('Beep');
  }
}

const vehicle = new VehicleCl('orange');
vehicle.drive();
// vehicle.honk();
console.log(vehicle.color);

class Car extends VehicleCl {
  //IMPORTANT -> Here we are not giving color a public modifier coz color is not a field in Car class, the field color belongs to vehicle
  constructor(public wheels: number, color: string) {
    super(color);
  }

  drive(): void {
    console.log('ZOOOOOMMMMMMMMMMMMMMMmmmmmmmmmm.');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, 'black');
car.startDrivingProcess();
console.log(car.color);
