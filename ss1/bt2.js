// Tạo mảng các đối tượng lớp học
let classes = [
    { id: 1, number: 25 },
    { id: 2, number: 30 },
    { id: 3, number: 50 },
    // thêm lớp học vào đây
];

// Tạo mảng mới với các điều kiện đã cho
let newClasses = classes.map(cls => {
    if (cls.number < 30) {
        return { id: cls.id, number: cls.number + 10 };
    } else if (cls.number > 40) {
        return { id: cls.id, number: cls.number - 10 };
    } else {
        return cls;
    }
});

// In mảng mới để kiểm tra kết quả
console.log(newClasses);
