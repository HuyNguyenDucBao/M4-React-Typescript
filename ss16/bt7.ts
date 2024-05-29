// Khai báo 3 biến num1, num2 và num3 với kiểu dữ liệu number
let num1: number = 10;
let num2: number = 5;
let num3: number;

// Thực hiện các phép tính cộng trừ nhân chia với 2 biến num1 và num2
num3 = num1 + num2;
console.log(`Kết quả phép cộng: ${num3}`);  // Kết quả: 15

num3 = num1 - num2;
console.log(`Kết quả phép trừ: ${num3}`);  // Kết quả: 5

num3 = num1 * num2;
console.log(`Kết quả phép nhân: ${num3}`);  // Kết quả: 50

num3 = num1 / num2;
console.log(`Kết quả phép chia: ${num3}`);  // Kết quả: 2

// Thay đổi kiểu dữ liệu của biến num1 thành string, num2 thành boolean
let num1Str: string = num1.toString();
let num2Bool: boolean = Boolean(num2);

// Thực hiện lại các phép tính và kiểm tra kết quả
// Lưu ý: Bạn không thể thực hiện các phép tính số học với một chuỗi và một giá trị boolean
// Vì vậy, chúng ta sẽ chỉ in ra các giá trị sau khi chúng được chuyển đổi
console.log(`num1 sau khi chuyển đổi thành chuỗi: ${num1Str}`);  // Kết quả: "10"
console.log(`num2 sau khi chuyển đổi thành boolean: ${num2Bool}`);  // Kết quả: true
