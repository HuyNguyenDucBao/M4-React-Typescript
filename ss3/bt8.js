let arr1 = [1, 2, 3, 7, 8];
let arr2 = [4, 5, 6];
let index = 3;
let newArr = insertArray(arr1, arr2, index);

function insertArray(arr1, arr2, index) {
    if (index >= 0 && index <= arr1.length) {
        return [...arr1.slice(0, index), ...arr2, ...arr1.slice(index)];
    } else {
        console.log("Vị trí không hợp lệ");
        return arr1; // Trả về mảng ban đầu nếu vị trí không hợp lệ
    }
}


console.log(newArr); // [1, 2, 3, 4, 5, 6, 7, 8]
