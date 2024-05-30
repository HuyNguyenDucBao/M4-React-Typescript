type MethodDecorator = (target: any, propertyKey: string, descriptor: PropertyDescriptor) => PropertyDescriptor;

function compose(...functions: ((n: number) => number)[]): MethodDecorator {
  return function (target, _propertyKey, descriptor) {
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

class MyClass {
    myMethod(a: number): number {
        return a - 50;
    }
}

MyClass.prototype.myMethod = compose(Math.sqrt, Math.abs)(MyClass.prototype, 'myMethod', Object.getOwnPropertyDescriptor(MyClass.prototype, 'myMethod') as PropertyDescriptor);

let myObject = new MyClass();
console.log(myObject.myMethod(-100));  // Output: 7.0710678118654755
