// Tạo một mảng các đối tượng sinh viên
let students = [
    { id: 1, name: 'Sinh viên 1' },
    { id: 2, name: 'Sinh viên 2' },
    { id: 3, name: 'Sinh viên 3' },
    // thêm nhiều sinh viên khác nếu muốn
];

// Sử dụng hàm forEach để duyệt qua mảng và in tên sinh viên
students.forEach(student => {
    console.log(student.name);
});
