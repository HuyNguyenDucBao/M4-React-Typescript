type HTTPMethod = "GET" | "POST" | "PUT" | "DELETE";

// Sử dụng Type Alias
let method: HTTPMethod;
method = "GET"; // Đúng
method = "POST"; // Đúng
method = "PUT"; // Đúng
method = "DELETE"; // Đúng
// method = "PATCH"; 
// Lỗi: Type '"PATCH"' is not assignable to type 'HTTPMethod'.
