// Tạo class PhoneBook
class PhoneBook {
    constructor(name, phoneNumber, email) {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
}

// Tạo một mảng rỗng để lưu trữ các liên hệ
let phoneBooks = [];

// Hàm thêm liên hệ vào danh bạ
function addContact(name, phoneNumber, email) {
    let contact = new PhoneBook(name, phoneNumber, email);
    phoneBooks.push(contact);
}

// Hàm hiển thị tất cả các liên hệ trong danh bạ
function displayContact() {
    phoneBooks.forEach(contact => {
        console.log(`Tên: ${contact.name}, Số Điện Thoại: ${contact.phoneNumber}, Email: ${contact.email}`);
    });
}
