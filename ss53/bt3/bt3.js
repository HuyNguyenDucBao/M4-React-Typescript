"use strict";
const processArray = (arr, callback) => {
    let i = 0;
    const processElement = () => {
        if (i < arr.length) {
            callback(arr[i]);
            i++;
            setTimeout(processElement, 1000);
        }
    };
    processElement();
};
// Sử dụng hàm
processArray([1, 2, 3, 4, 5], (element) => {
    console.log(`Phần tử thứ ${element}`);
});
