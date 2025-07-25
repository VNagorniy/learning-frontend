// Ф-я показа кол-ва повторений в массиве

function countOccurrences(arr) {
	const res = {};

	arr.forEach((el) => {
		if (res[el]) {
			res[el] = res[el] + 1;
		} else {
			res[el] = 1;
		}
	});

	return res;
}

console.log(countOccurrences([1, 2, 2, 3, 3, 3, 4]));

//Ф-я принимает массив, возвращает объект, ключи это элемент массива, а значение кол-во повторений

const mixedArray = [1, '1', { a: 1 }, { a: 1 }, 1, 'test', 'test'];

const countElements = (arr) => {
	const result = {};

	for (let i = 0; i < arr.length; i++) {
		const current = JSON.stringify(arr[i]);

		if (result[current]) {
			result[current].count += 1;
		} else {
			result[current] = { value: current, count: 1 };
		}
	}

	return result;
};

const counts = countElements(mixedArray);
console.log(counts);

//Палиндром (слово, читающейся в обе стороны одинаково)
let str1 = 'потоп';
let str2 = 'тапок';

const isPalindrome = (str) => str.split('').reverse().join('') === str;

console.log(isPalindrome(str1));
console.log(isPalindrome(str2));
