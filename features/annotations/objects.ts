// # 31 Annotations Around Objects
const profile = {
  username: 'alex',
  age: 20,
  coords: {
    lat: 19,
    lng: 21,
  },

  setAge(age: number): void {
    this.age = age;
  },
};

const { age, username }: { age: number; username: string } = profile;
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
