namespace App {
  //_ AutoBind Decorator
  export function autobind(
    _target: any,
    _method: string,
    descriptor: PropertyDescriptor
  ): PropertyDescriptor {
    const originalMethod = descriptor.value;
    const adjustedDescriptor: PropertyDescriptor = {
      get() {
        return originalMethod.bind(this);
      },
    };

    return adjustedDescriptor;
  }
}
