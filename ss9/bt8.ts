type Item = [string, number, number];

function calculateTotalPrice(item: Item): number {
  const [name, price, quantity] = item;
  const totalPrice = price * quantity;
  return totalPrice;
}

// Sử dụng hàm
const item1: Item = ['Sách', 15.99, 2];
const totalPrice1 = calculateTotalPrice(item1); // 31.98

const item2: Item = ['Bút', 2.5, 5];
const totalPrice2 = calculateTotalPrice(item2); // 12.5