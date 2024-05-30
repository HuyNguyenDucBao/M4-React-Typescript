"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function logDecorator() {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
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
    myMethod(a, b) {
        return a + b;
    }
}
__decorate([
    logDecorator()
], NumClass.prototype, "myMethod", null);
let myObject = new NumClass();
console.log(myObject.myMethod(5, 7)); // Output: 12
