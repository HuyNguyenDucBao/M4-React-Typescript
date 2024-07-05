function sortArrayWithPromise(array: number[]): Promise<number[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            const sortedArray = array.sort((a, b) => a - b);
            resolve(sortedArray);
        }, 1000);
    });
}

// Sử dụng hàm sortArrayWithPromise
sortArrayWithPromise([1, 7, 2, 5, 9, 5]).then(sortedArray => console.log(sortedArray));
