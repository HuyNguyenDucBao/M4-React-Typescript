function logDecorator(): MethodDecorator {
  return function (
    target: any,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      console.log(`Called function: ${String(propertyKey)}`);
      console.log(`With arguments: ${JSON.stringify(args)}`);
      const result = originalMethod.apply(this, args);
      console.log(`Function returned: ${JSON.stringify(result)}`);
      return result;
    };

    return descriptor;
  };
}

class NumClass {
    @logDecorator()
    myMethod(a: number, b: number): number {
        return a + b;
    }
}

let myObject = new NumClass();
console.log(myObject.myMethod(5, 7));  // Output: 12
