"use strict";
function task1(callback) {
    setTimeout(() => {
        console.log("Task 1 được thực thi");
        callback();
    }, 1000);
}
function task2(callback) {
    setTimeout(() => {
        console.log("Task 2 được thực thi");
        callback();
    }, 1500);
}
function task3() {
    setTimeout(() => {
        console.log("Task 3 được thực thi! Hoàn thành");
    }, 2000);
}
// Thực thi các hàm tuần tự bằng cách truyền hàm tiếp theo như một callback
task1(() => {
    task2(() => {
        task3();
    });
});
