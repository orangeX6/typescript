class HoldAnything<T> {
  data: T | undefined;

  add(a: T): T {
    return a;
  }
}

const holdNumber = new HoldAnything<number>();
holdNumber.data = 123;
holdNumber.add(6);

const holdString = new HoldAnything<string>();
holdString.data = 'String of some sort';
