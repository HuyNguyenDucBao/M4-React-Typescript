function identity<T>(arg: T): T {
    return arg;
}

// Kiểm tra hàm với nhiều loại dữ liệu khác nhau
let output1 = identity<string>("myString");  // Kết quả: "myString"
let output2 = identity<number>(68);  // Kết quả: 68
let output3 = identity<boolean>(true);  // Kết quả: true

console.log(output1);
console.log(output2);
console.log(output3);
