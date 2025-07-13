// Сортировка находит наименьшее значение ставит его в начало массива путём замены, затем по остатку ищет наименьшее и меняет со 2м элементом
const arr = [0, 4, 2, 5, 7, 1, 2, 6, 8, -1, -5, 7, 9, 3, 1, 15, -26, -30, 37, 16, 6];
let count = 0;

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let indexMin = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[indexMin]) {
        indexMin = j;
      }
      count += 1;
    }
    //Временная переменная в которую кладётся значение из 1ого элемента массива
    let tmp = array[i];
    //На место этого элемента кладём минимальный
    array[i] = array[indexMin];
    //На место минимального кладём значение из переменной tmp
    array[indexMin] = tmp;
  }
  return array;
}

console.log(selectionSort(arr));
console.log(arr.length);
console.log('count = ', count);

// Сложность O(n2), n в квадрате, коэффициэнты в оценки сложности алгоритма не участвуют
