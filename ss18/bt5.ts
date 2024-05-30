function compose(...functions: ((n: number) => number)[]) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (a: number): number {
      let result = originalMethod.apply(this, [a]);
      for (const func of functions) {
        result = func(result);
      }
      return result;
    };

    return descriptor;
  };
}

class NumClass {
  @compose(Math.sqrt, Math.abs)
  myMethod(a: number): number {
    return a - 50;
  }
}

const numbObject = new NumClass();
console.log(myObject.myMethod(-100)); // Output: 7.0710678118654755