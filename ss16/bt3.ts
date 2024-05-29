enum WeekDays {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

// In tất cả các ngày trong tuần
for (let day in WeekDays) {
    if (isNaN(Number(day))) {  // Kiểm tra để chỉ in tên ngày, không in số
        console.log(day);
    }
}
