// Định nghĩa enum cho màu xe
enum MauXe {
    Den = 'Den',
    Trang = 'Trang',
    Xam = 'Xam',
    Do = 'Do',
    Xanh = 'Xanh'
  }
  
  // Class decorator để bổ sung thuộc tính soluotmua và ngaysx
  function themThuocTinh<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      soluotmua = 0;
      ngaysx = new Date().toISOString().slice(0, 10);
    };
  }
  
  @ThemThuocTinh
  class XeOTo {
    tenxe: string;
    giaxe: number;
    mauxe: MauXe;
  
    constructor(tenxe: string, giaxe: number, mauxe: MauXe) {
      this.tenxe = tenxe;
      this.giaxe = giaxe;
      this.mauxe = mauxe;
    }
  }
  
  // Sử dụng
  const xeA = new XeOTo('Toyota Camry', 1500000000, MauXe.Den);
  console.log(xeA.tenxe); // Toyota Camry
  console.log(xeA.giaxe); // 1500000000
  console.log(xeA.mauxe); // Den
  console.log(xeA.soluotmua); // 0
  console.log(xeA.ngaysx); // Ngày hiện tại, ví dụ: 2023-05-30