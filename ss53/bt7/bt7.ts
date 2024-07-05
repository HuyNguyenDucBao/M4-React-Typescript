function myForEach<T>(array: T[], callback: (element: T, index: number, array: T[]) => void) {
    for (let index = 0; index < array.length; index++) {
        callback(array[index], index, array);
    }
}

// Sử dụng hàm myForEach
const numbers: number[] = [1, 2, 3, 4, 5];
myForEach(numbers, (element, index, array) => {
    console.log(`Vị trí: ${index} | Phần tử: ${element} | Mảng: ${array}`);
});
