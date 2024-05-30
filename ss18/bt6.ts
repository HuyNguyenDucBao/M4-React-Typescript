import 'reflect-metadata';

function typeCheckDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    let originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        let methodSignature = Reflect.getMetadata("design:paramtypes", target, propertyKey);

        for (let i = 0; i < args.length; i++) {
            if (args[i] == null || typeof args[i] !== methodSignature[i].name.toLowerCase()) {
                throw new Error(`Argument type error: expected ${methodSignature[i].name.toLowerCase()} but received ${typeof args[i]}`);
            }
        }

        return originalMethod.apply(this, args);
    }

    return descriptor;
}

class InClass {
    @typeCheckDecorator
    add(a: number, b: number): number {
        return a + b;
    }
}

let inObject = new InClass();
console.log(inObject.add(5, 7));  // Output: 12
try {
    console.log(inObject.add(5, "hello"));  // Throws Error: Argument type error: expected number but received string
} catch (error) {
    console.error(error.message);
}
