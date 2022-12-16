// # 39 Interfaces
// # 40 Long Type Annotations
// # 41 Fixing Long Annotations with Interfaces
// # 42 Syntax Around Interfaces
// # 43 Functions in Interfaces
// # 44 Code Reuse with Interfaces
// # 45 General Plan with Interfaces

// # 40 Long Type Annotations
// Without Interface
const oldCivic = {
  name: 'civic',
  year: new Date('2000-01-01'),
  broken: true,
  coords: { lat: 14, lng: 20 },
  summary(): string {
    return `Name: ${this.name}🎃`;
  },
};

const printVehicle = (vehicle: {
  name: string;
  year: Date;
  broken: boolean;
}): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`year: ${vehicle.year}`);
  console.log(`broken: ${vehicle.broken}`);
};

printVehicle(oldCivic);

// # 41 Fixing Long Annotations with Interfaces
// # 42 Syntax Around Interfaces
// With Interface
interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  coords: { lat: number; lng: number };
  summary(): string;
}

const vehicleDetails = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
  console.log(`coords: ${vehicle.coords.lat}`);
  console.log(`coords: ${vehicle.coords.lng}`);
  console.log(vehicle.summary());
};

vehicleDetails(oldCivic);

// # 43 Functions in Interfaces
interface Report {
  summary(): string;
}

const printSummary = (item: Report): void => {
  console.log(item.summary());
};

printSummary(oldCivic);

// # 44 Code Reuse with Interfaces
const drinkTwo = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar}grams of sugar`;
  },
};

printSummary(drinkTwo);

// # 45 General Plan with Interfaces
