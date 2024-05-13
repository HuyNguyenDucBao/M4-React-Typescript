function findMaxLessThanEqualTo(arr, num) {
    // Lọc mảng để chỉ giữ lại các số nhỏ hơn hoặc bằng num
    let filteredArr = arr.filter(item => item <= num);

    // Tìm số lớn nhất trong mảng đã lọc
    let max = Math.max(...filteredArr);

    // Trả về kết quả
    return max;
}

// Sử dụng hàm
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let num = 5;
console.log(findMaxLessThanEqualTo(arr, num));  // Kết quả: 5
