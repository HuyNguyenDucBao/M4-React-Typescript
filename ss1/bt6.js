// Mảng các đối tượng nhân viên
let employees = [
    { id: 1, name: 'Alice', age: 25, department: 'IT' },
    { id: 2, name: 'Bob', age: 20, department: 'IT' },
    { id: 3, name: 'Charlie', age: 25, department: 'Marketing' },
    { id: 4, name: 'David', age: 35, department: 'IT' },
    { id: 5, name: 'Eve', age: 30, department: 'HR' },
    // thêm nhân viên vào đây
];

// Sử dụng hàm filter để tạo mảng mới bao gồm các nhân viên có tuổi nhỏ hơn 25
let youngEmployees = employees.filter(employee => employee.age < 25);

// In mảng mới để kiểm tra kết quả
console.log(youngEmployees);
