printArgs(1, 2, 3, 'a', 'b', 'c'); // Output: 1,

function printArgs(...args) {
    args.forEach(arg => console.log(arg));
}
