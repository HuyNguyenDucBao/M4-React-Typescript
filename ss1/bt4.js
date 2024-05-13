// Tạo mảng các đối tượng sách
let books = [
    { id: 1, name: 'Sách 1' },
    { id: 2, name: 'Sách 2' },
    { id: 3, name: 'Sách 3' },
    // thêm sách vào đây
];

// Hàm tìm kiếm sách theo id
function findBookById(id) {
    let book = books.find(book => book.id === id);
    if (book) {
        console.log(`Id: ${book.id}, Tên sách: ${book.name}`);
    } else {
        console.log('Không có kết quả tìm kiếm');
    }
}

// Sử dụng hàm
findBookById(1);  // thay đổi id để tìm sách khác
