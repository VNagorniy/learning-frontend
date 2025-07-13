const array = [1, 4, 6, 6, 1, 3, 11, 2, 5, 8, 7, 9];
let count = 0;

function linearSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    count += 1;
    if (array[i] === item) {
      return i;
    }
  }
  return null;
}

console.log(linearSearch(array, 11));
console.log('count = ', count);
// Сложность O(n)
