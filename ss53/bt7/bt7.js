"use strict";
function myForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
        callback(array[index], index, array);
    }
}
// Sử dụng hàm myForEach
const numbers = [1, 2, 3, 4, 5];
myForEach(numbers, (element, index, array) => {
    console.log(`Vị trí: ${index} | Phần tử: ${element} | Mảng: ${array}`);
});
