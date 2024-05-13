// Tạo mảng các phần tử bất kỳ
let arr = [1, 2, 'z', true, -1, -3];

// Lọc các giá trị là số nguyên dương
let positiveIntegers = arr.filter(item => Number.isInteger(item) && item > 0);

// In mảng mới để kiểm tra kết quả
console.log(positiveIntegers);
