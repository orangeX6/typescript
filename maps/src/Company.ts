import { faker } from '@faker-js/faker';
import { Mappable } from './CustomMap';

export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'red';

  constructor() {
    this.companyName = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: +faker.address.latitude(),
      lng: Number(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `
    <div id="content">
        <p>Company Name: <h2>${this.companyName}</h2></p>
        <p>CatchPhrase: <h4>${this.catchPhrase}</h4></p>
    </div>
    `;
  }
}
