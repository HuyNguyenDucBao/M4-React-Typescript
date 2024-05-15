function sum(arr) {
    let total = 0;
    for (const num of arr) {
        if (num % 2 === 0) {
            total += num;
        }
    }
    return total;
}
