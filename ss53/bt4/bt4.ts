function displayNumbers(callback: (num: number) => void, delay: number) {
    let num = 1;
    setInterval(() => {
        callback(num++);
    }, delay);
}

// Sử dụng hàm displayNumbers
displayNumbers((num) => {
    console.log(`Số thứ tự: ${num}`);
}, 1000);
