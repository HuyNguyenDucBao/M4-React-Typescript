function swapElements<T>(array: T[], index1: number, index2: number): T[] {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
    return array;
}

// Kiểm tra hàm với một mảng số
let numbers = [1, 2, 3, 4, 5];
console.log(swapElements(numbers, 0, 4));  // Kết quả: [5, 2, 3, 4, 1]

// Kiểm tra hàm với một mảng chuỗi
let strings = ["one", "two", "three", "four", "five"];
console.log(swapElements(strings, 0, 4));  // Kết quả: ["five", "two", "three", "four", "one"]
