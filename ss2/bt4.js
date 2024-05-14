function allNumbersDivisibleBy(arr, a) {
    return arr.every(function(num) {
        return num % a === 0;
    });
}
