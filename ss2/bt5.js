// Tạo mảng employees chứa 3 đối tượng nhân viên
const employees = [
    {
      name: "Nguyễn Văn A",
      age: 21,
    },
    {
      name: "Nguyễn Văn B",
      age: 30,
    },
    {
      name: "Nguyễn Văn C",
      age: 19,
    }
  ];
  
  // Hàm sortEmployee sắp xếp mảng nhân viên theo tuổi
  function sortEmployee(empArray, sortOrder) {
    if (sortOrder === "Increase") {
      return empArray.sort((a, b) => a.age - b.age);
    } else if (sortOrder === "Decrease") {
      return empArray.sort((a, b) => b.age - a.age);
    }
  }
  
  // Ví dụ sử dụng hàm sortEmployee
  console.log(sortEmployee(employees, "Increase")); // Sắp xếp tăng dần theo tuổi
  console.log(sortEmployee(employees, "Decrease")); // Sắp xếp giảm dần theo tuổi
  