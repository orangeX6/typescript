export class Attributes<T extends object> {
  constructor(private data: T) {}

  get = <K extends keyof T>(key: K): T[K] => {
    // console.log(this);
    return this.data[key];
  };

  set(update: T): void {
    // this.data = { ...this.data, ...update };
    Object.assign(this.data, update);
  }

  getAll(): T {
    return this.data;
  }
}
