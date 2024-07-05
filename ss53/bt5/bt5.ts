function checkCondition(condition: boolean, callback: (result: boolean) => void) {
    setTimeout(() => {
        callback(condition);
    }, 1000);
}

function display(result: boolean) {
    console.log(`Điều kiện trả về: ${result}`);
}

// Thực thi hàm checkCondition với điều kiện là true
checkCondition(true, display);

// Thực thi hàm checkCondition với điều kiện là false
checkCondition(false, display);
