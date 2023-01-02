function MyMixin(base: any) {
  return class extends base {
    foo() {
      console.log('foo');
    }
  };
}

class MyClass1 {
  bar() {
    console.log('bar');
  }
}

class MyClass2 {
  baz() {
    console.log('baz');
  }
}

// apply mixin to classes
const MyClass1WithMixin = MyMixin(MyClass1);
const MyClass2WithMixin = MyMixin(MyClass2);

const c1 = new MyClass1WithMixin();
const c2 = new MyClass2WithMixin();

c1.foo(); // "foo"
c2.foo(); // "foo"
