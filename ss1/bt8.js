function insertArray(arr1, arr2, index) {
    // Sử dụng phương thức splice để chèn mảng arr2 vào arr1 tại vị trí index
    arr1.splice(index, 0, ...arr2);

    // Trả về mảng sau khi được chèn
    return arr1;
}

// Sử dụng hàm
let arr1 = [1, 2, 'a', 6, 7];
let arr2 = ['b', 'hai'];
let index = 2;
console.log(insertArray(arr1, arr2, index));  // Kết quả: [1, 2, 'b', 'hai', 'a', 6, 7]
