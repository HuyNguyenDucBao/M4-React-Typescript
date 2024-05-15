function typeConsole(type = "log") {
    console[type] ? consoletype : console.log('Type không hợp lệ');
  }
  
  // Ví dụ sử dụng hàm
  typeConsole(); // In ra: Đây là type: log
  typeConsole('warn'); // In ra: Đây là type: warn
  typeConsole('error'); // In ra: Đây là type: error
  