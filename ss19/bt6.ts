function KiemTraDiem(min: number, max: number) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      const originalMethod = descriptor.value;
  
    descriptor.value = function (...args: any[]) {
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
    diem: number;
  
    constructor(diem: number) {
      this.diem = diem;
    }
  
    @KiemTraDiem(0, 10)
    hienketqua() {
      console.log(`Điểm của bạn là: ${this.diem}`);
    }
  }
  
  // Sử dụng
  const sinhVien1 = new SinhVienThi(8);
  sinhVien1.hienketqua(); // Kết quả: Điểm của bạn là: 8
  
  const sinhVien2 = new SinhVienThi(11);
  sinhVien2.hienketqua(); // Lỗi: Điểm phải từ 0 đến 10