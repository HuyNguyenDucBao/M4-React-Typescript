"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function KiemTraDiem(min, max) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            const diem = args[0];
            if (diem < min || diem > max) {
                throw new Error(`Điểm phải từ ${min} đến ${max}`);
            }
            return originalMethod.apply(this, args);
        };
        return descriptor;
    };
}
class SinhVienThi {
    constructor(diem) {
        this.diem = diem;
    }
    hienketqua() {
        console.log(`Điểm của bạn là: ${this.diem}`);
    }
}
__decorate([
    KiemTraDiem(0, 10)
], SinhVienThi.prototype, "hienketqua", null);
// Sử dụng
const sinhVien1 = new SinhVienThi(8);
sinhVien1.hienketqua(); // Kết quả: Điểm của bạn là: 8
const sinhVien2 = new SinhVienThi(11);
sinhVien2.hienketqua(); // Lỗi: Điểm phải từ 0 đến 10
