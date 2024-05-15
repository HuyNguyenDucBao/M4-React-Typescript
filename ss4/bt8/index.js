import { DateFormatter } from './formatData.js';

let dateFormatter = new DateFormatter(new Date());
console.log(dateFormatter.formatDate()); // Output sẽ phụ thuộc vào thời gian hiện tại của máy
