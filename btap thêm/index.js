let numbers = [];

const addNumber = () => {
  const { value: inputValue } = document.getElementById('numberInput');
  if (!isNaN(inputValue) && Number.isInteger(parseFloat(inputValue))) {
    numbers.push(parseFloat(inputValue));
    displayNumbers();
    displaySum();
  } else {
    alert('Vui lòng nhập một số nguyên!');
  }
  document.getElementById('numberInput').value = '';
}

const displayNumbers = () => {
  const numbersListElement = document.getElementById('numbersList');
  numbersListElement.innerHTML = '';
  numbers.forEach((number) => {
    const listItem = document.createElement('li');
    listItem.textContent = number;
    numbersListElement.appendChild(listItem);
  });
}

const displaySum = () => {
  const sumElement = document.getElementById('sum');
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  sumElement.textContent = `Tổng: ${sum}`;
}

document.addEventListener('DOMContentLoaded', () => {
  const addButton = document.getElementById('addButton');
  addButton.addEventListener('click', addNumber);
});
