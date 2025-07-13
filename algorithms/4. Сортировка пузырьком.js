// Малоэффективный, также 2м циклом происходит итерация и сравниваем попарно лежащие элементы, если следющий элемент меньше предыдущего, то меняем местами, своего рода всплытие
const arr = [0, 4, 2, 5, 7, 1, 2, 6, 8, -1, -5, 7, 9, 3, 1, 15, -26, -30, 37, 16, 6];
let count = 0;

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j + 1] < array[j]) {
        let tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
      count += 1;
    }
  }
  return array;
}

console.log(bubbleSort(arr));
console.log('length', arr.length);
console.log('count = ', count);
// Сложность O(n2), притом n в квадрате целый
