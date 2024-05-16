function typeConsole(type = "log") {
  const validTypes = ["log", "warn", "error", "info", "debug"];
  if (validTypes.includes(type)) {
    console[type](`Đây là type: ${type}`);
  } else {
    console.log('Type không hợp lệ');
  }
 }
 
 // Ví dụ sử dụng
 typeConsole(); // In ra: Đây là type: log
 typeConsole('warn'); // In ra: Đây là type: warn
 typeConsole('error'); // In ra: Đây là type: error
 typeConsole('info'); // In ra: Đây là type: info
 typeConsole('debug'); // In ra: Đây là type: debug
 typeConsole('invalidType'); // In ra: Type không hợp lệ  
