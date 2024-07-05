function divideNumbers(a: number, b: number): Promise<number> {
    return new Promise((resolve, reject) => {
        try {
            if (b === 0) {
                throw new Error("Không thể chia cho 0");
            }
            const result = a / b;
            resolve(result);
        } catch (error) {
            reject(error);
        } finally {
            console.log("Kết thúc hàm divideNumbers");
        }
    });
}

// Sử dụng hàm divideNumbers
divideNumbers(10, 2)
    .then(result => console.log(result))
    .catch(error => console.log(error.message));
