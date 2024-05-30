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
        soluotmua: number = 0;
        ngaysx: string = new Date().toISOString().slice(0, 10);
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
