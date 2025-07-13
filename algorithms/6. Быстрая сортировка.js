//Делим массив на подмассивы и каждый раз рекурсивно выбираем опорный элемент у каждого массива(случайно или центральный) - пробегаемся по массиву и все элменты которые меньше опорного добавляем в один массив, все которые больше в другой массив. Для 2х полученных массивов выполняется аналогичная операция до тех пор пока длина массива не станет равна 1 (базовый случай выхода из рекурсии) - склеиваем подмассивы в один большой.
const arr = [0, 4, 2, 5, 7, 1, 2, 6, 8, -1, -5, 7, 9, 3, 1, 15, -26, -30, 37, 16, 6];
let count = 0;

function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }
  let pivotIndex = Math.floor(array.length / 2);
  let pivot = array[pivotIndex];
  let less = [];
  let more = [];
  for (let i = 0; i < array.length; i++) {
    count += 1;
    //Сравниваем индекс текущей итерации в цикле с индексом опорной точки
    if (i === pivotIndex) continue;
    //Если текущий элемент итерации меньше pivot то добавляем в массив less, иначе в массив more
    if (array[i] < pivot) {
      less.push(array[i]);
    } else {
      more.push(array[i]);
    }
  }
  return [...quickSort(less), pivot, ...quickSort(more)];
}

console.log(quickSort(arr));
console.log('count = ', count);

// Сложность O(log2n * n)
