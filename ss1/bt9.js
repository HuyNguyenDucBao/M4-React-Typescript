function getAllHobbies(users) {
    // Tạo một mảng chứa tất cả các sở thích từ tất cả người dùng
    let allHobbies = users.flatMap(user => user.hobbies);

    // Sử dụng Set để loại bỏ các sở thích trùng lặp và tạo một mảng mới từ Set
    let uniqueHobbies = [...new Set(allHobbies)];

    // Trả về mảng các sở thích phân biệt
    return uniqueHobbies;
}

// Sử dụng hàm
let users = [
    { id: 1, name: 'Alice', hobbies: ['Reading', 'Drawing'] },
    { id: 2, name: 'Bob', hobbies: ['Gaming', 'Cooking', 'Reading'] },
    // thêm người dùng vào đây
];
console.log(getAllHobbies(users));  // Kết quả: ['Reading', 'Drawing', 'Gaming', 'Cooking']
