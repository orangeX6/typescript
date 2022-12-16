import { faker } from '@faker-js/faker';
import { Mappable } from './CustomMap';

// you do not have to add implements clause right here.This is not required at all. The reason we would decide to add this implements clause to this class is so that if we failed to properly implement an interface, typescript can point us to the true source of error
export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'blue';

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: +faker.address.latitude(),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}
