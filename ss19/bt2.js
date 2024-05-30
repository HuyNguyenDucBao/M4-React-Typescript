"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function validateParams(...validationFunctions) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
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
function isString(value) {
    return typeof value === 'string';
}
function isNumber(value) {
    return typeof value === 'number';
}
class NumbClass {
    myMethod(arg1, arg2) {
        console.log(`arg1: ${arg1}, arg2: ${arg2}`);
    }
}
__decorate([
    validateParams(isString, isNumber)
], NumbClass.prototype, "myMethod", null);
const numbClass = new NumbClass();
numbClass.myMethod("hello", 42); // Kết quả: arg1: hello, arg2: 42
try {
    numbClass.myMethod("hello", "world"); // Lỗi: Invalid argument at index 1
}
catch (error) {
    console.error(error.message);
}
