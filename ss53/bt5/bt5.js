"use strict";
function checkCondition(condition, callback) {
    setTimeout(() => {
        callback(condition);
    }, 1000);
}
function display(result) {
    console.log(`Điều kiện trả về: ${result}`);
}
// Thực thi hàm checkCondition với điều kiện là true
checkCondition(true, display);
// Thực thi hàm checkCondition với điều kiện là false
checkCondition(false, display);
