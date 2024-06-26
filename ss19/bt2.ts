type ValidationFunction = (value: any) => boolean;

function validateParams(...validationFunctions: ValidationFunction[]): MethodDecorator {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function (...args: any[]) {
            for (let i = 0; i < args.length; i++) {
                const validationFunction = validationFunctions[i];
                if (validationFunction && !validationFunction(args[i])) {
                    throw new Error(`Invalid argument at index ${i}`);
                }
            }

            return originalMethod.apply(this, args);
        };

        return descriptor;
    };
}

// Ví dụ sử dụng
function isString(value: any): boolean {
    return typeof value === 'string';
}

function isNumber(value: any): boolean {
    return typeof value === 'number';
}

class NumbClass {
    @validateParams(isString, isNumber)
    myMethod(arg1: string, arg2: number): void {
        console.log(`arg1: ${arg1}, arg2: ${arg2}`);
    }
}

const numbClass = new NumbClass();
numbClass.myMethod("hello", 42); // Kết quả: arg1: hello, arg2: 42
try {
  numbClass.myMethod("hello", "world"); // Lỗi: Invalid argument at index 1
} catch (error: any) {
  console.error(error.message);
}
