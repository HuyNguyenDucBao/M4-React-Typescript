// Khai báo hai biến bằng từ khóa const
const num = 10;
const arr = [1, 2, 3];

// Thử gán lại biến num
num = 20; // Lỗi: Assignment to constant variable.

// Thêm một phần tử vào mảng arr
arr.push(4); // Thành công
console.log(arr); // [1, 2, 3, 4]

// Khi bạn chạy đoạn mã trên, bạn sẽ nhận được một lỗi TypeError: Assignment to constant variable. khi cố gắng gán lại giá trị cho biến num. Điều này xảy ra bởi vì const khai báo một hằng số, nghĩa là giá trị của nó không thể thay đổi sau khi được khai báo.

// Tuy nhiên, với mảng arr, bạn có thể thêm một phần tử vào mảng mà không gặp lỗi. Điều này bởi vì, mặc dù arr được khai báo bằng từ khóa const, nhưng bạn vẫn có thể thay đổi nội dung của mảng (thêm hoặc xóa phần tử). Nhưng bạn không thể gán lại arr thành một mảng mới hoặc một giá trị khác. Đây là một điểm đặc biệt của JavaScript khi làm việc với các đối tượng (và mảng là một dạng đặc biệt của đối tượng).




