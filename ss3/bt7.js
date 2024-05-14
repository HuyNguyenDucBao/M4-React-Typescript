let obj1 = { a: 1, b: 2 };
let obj2 = { b: 3, c: 4 };
let obj3 = { c: 5 };
function mergeObjects(...objects) {
    let result = {};
    for (let obj of objects) {
        result = { ...result, ...obj };
    }
    return result;
}

console.log(mergeObjects(obj1, obj2, obj3)); // { a: 1, b: 3, c: 5 }
