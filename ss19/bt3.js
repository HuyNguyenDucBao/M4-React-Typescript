"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function TheoDoiPass(sokytumin, sokytumax) {
    return function (target, propertyKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            if (newVal.length < sokytumin || newVal.length > sokytumax) {
                throw new Error(`Độ dài password phải từ ${sokytumin} đến ${sokytumax} ký tự`);
            }
            value = newVal;
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true,
        });
    };
}
class User {
}
__decorate([
    TheoDoiPass(6, 12)
], User.prototype, "password", void 0);
// Sử dụng
const user = new User();
user.username = 'johndoe';
// Gán giá trị hợp lệ cho password
user.password = 'mypassword'; // OK
// Gán giá trị không hợp lệ cho password
user.password = 'short'; // Lỗi: Độ dài password phải từ 6 đến 12 ký tự
user.password = 'verylongpassword'; // Lỗi: Độ dài password phải từ 6 đến 12 ký tự
