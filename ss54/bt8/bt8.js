"use strict";
function countDown(n) {
    return new Promise((resolve) => {
        let intervalId = setInterval(() => {
            console.log(n);
            if (n === 0) {
                clearInterval(intervalId);
                resolve('Hoàn thành quá trình đếm');
            }
            else {
                n--;
            }
        }, 1000);
    });
}
// Sử dụng hàm countDown
countDown(5).then(message => console.log(message));
