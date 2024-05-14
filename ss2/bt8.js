function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function hasPrimeNumber(arr) {
    return arr.every(isPrime);
}

// Ví dụ sử dụng hàm
console.log(hasPrimeNumber([2, 3, 5, 7, 11])); // true
console.log(hasPrimeNumber([4, 6, 8, 9, 10])); // false
