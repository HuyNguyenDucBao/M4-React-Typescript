
function sum(arr) {
    return arr.reduce((a, b) => a + b, 0);
}

function sum(arr) {
    let total = 0;
    for(let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}
