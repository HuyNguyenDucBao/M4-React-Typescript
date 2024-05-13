function filterArray(arr1, arr2) {
    // Tạo một mảng mới từ arr1 bằng cách lọc ra các giá trị không có trong arr2
    let filteredArr = arr1.filter(item => !arr2.includes(item));

    // Tạo một mảng mới từ arr1 bằng cách lọc ra các giá trị có trong arr2
    let removedArr = arr1.filter(item => arr2.includes(item));

    // Thay đổi arr1 bằng mảng đã được lọc
    arr1.splice(0, arr1.length, ...filteredArr);

    // Trả về mảng các giá trị đã bị lọc
    return removedArr;
}

// Sử dụng hàm
let arr1 = [1, 2, '1', 3, 'a'];
let arr2 = [1, 2, 3, 4];
console.log(filterArray(arr1, arr2));  // Kết quả: [1, 2, 3]
console.log(arr1);  // Mảng arr1 sau khi gọi hàm: ['1', 'a']
