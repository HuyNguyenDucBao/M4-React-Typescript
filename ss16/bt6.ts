let strVar: string = "2"; // Biến kiểu string
let numVar: number = 2; // Biến kiểu number

// So sánh hai biến
if (strVar == numVar.toString()) {
  console.log("Các biến bằng nhau khi sử dụng toán tử ==.");
} else {
  console.log("Các biến không bằng nhau khi sử dụng toán tử ==.");
}

if (strVar === numVar.toString()) {
  console.log("Các biến bằng nhau khi sử dụng toán tử ===.");
} else {
  console.log("Các biến không bằng nhau khi sử dụng toán tử ===.");
}
