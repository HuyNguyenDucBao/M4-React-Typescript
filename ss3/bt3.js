// Tạo mảng các đối tượng sinh viên
const students = [
    {
      id: 1,
      name: "Nguyễn Văn A",
    },
    {
      id: 2,
      name: "Nguyễn Văn B",
    },
    {
      id: 3,
      name: "Nguyễn Văn C",
    }
  ];
  
  // Duyệt qua tất cả các sinh viên trong mảng và in lời chào
  students.forEach(student => {
    console.log(`Xin chào, ${student.name}!`);
  });
  