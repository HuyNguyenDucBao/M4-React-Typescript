function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function hasPrimeNumber(arr) {
    return arr.some(isPrime);
}

// Ví dụ sử dụng hàm
console.log(hasPrimeNumber([4, 6, 8, 9, 10])); // false
console.log(hasPrimeNumber([4, 6, 8, 9, 11])); // true
