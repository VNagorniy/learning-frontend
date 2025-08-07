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

//------------------------------------------------------------------
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

//------------------------------------------------------------------
//Палиндром (слово, читающейся в обе стороны одинаково)
let str1 = 'потоп';
let str2 = 'тапок';

const isPalindrome = (str) => str.split('').reverse().join('') === str;

console.log(isPalindrome(str1));
console.log(isPalindrome(str2));

//------------------------------------------------------------------
//Проверка строки на анаграмму
function isAnagram(str1, str2) {
	const formatString = (str) =>
		str
			.split('')
			.filter((char) => char !== ' ')
			.map((char) => char.toLowerCase())
			.sort()
			.join('');

	return formatString(str1) === formatString(str2);
}

// Пример использования
console.log(isAnagram('listen', 'silent')); // true
console.log(isAnagram('hello', 'world')); // false
console.log(isAnagram('Dormitory', 'Dirty room')); // true

//------------------------------------------------------------------
//Ф-я возвращающая первое уникальное вхождение в строке

console.log(firstUniqueChar('leetcode')); //l
console.log(firstUniqueChar('aabbccdde')); //e
console.log(firstUniqueChar('aabbcc')); //null

function firstUniqueChar(str) {
	const res = {};

	for (let item of str) {
		res[item] = (res[item] || 0) + 1;
	}

	for (let item of str) {
		if (res[item] === 1) {
			return item;
		}
	}
	return null;
}

//------------------------------------------------------------------
//Напишите функцию, которая принимает массив чисел и возвращает массив объектов. Каждый объект должен содержать уникальное число из исходного массива и количество его повторений.
//Пример: Для массива [1, 2, 2, 3, 3, 3, 4] функция должна вернуть [{ value: 1, count: 1 }, { value: 2, count: 2 }, { value: 3, count: 3 }, { value: 4, count: 1 }].

function countUniqueValues(arr) {
	const result = [];
	const countMap = {};

	arr.forEach((num) => {
		countMap[num] = (countMap[num] || 0) + 1;
	});

	for (let num in countMap) {
		result.push({ value: parseInt(num), count: countMap[num] });
	}

	return result;
}

console.log(countUniqueValues([1, 2, 2, 3, 3, 3, 4])); // [{ value: 1, count: 1 }, { value: 2, count: 2 }, { value: 3, count: 3 }, { value: 4, count: 1 }]

//------------------------------------------------------------------
//Необходимо написать функцию, возвращающую значения всех вершин дерева:
const tree = {
	value: 1,
	children: [
		{
			value: 2,
			children: [{ value: 4 }, { value: 5 }]
		},
		{
			value: 3,
			children: [{ value: 6 }, { value: 7 }]
		}
	]
};

function getTreeValues(tree) {
	const values = [];

	function recursion(node) {
		if (typeof node.value === 'number') {
			values.push(node.value);
		}

		if (node.children) {
			node.children.forEach(recursion);
		}
	}

	recursion(tree);
	return values;
}

console.log(getTreeValues(tree)); // => [1,2,4,5,3,6,7]

//------------------------------------------------------------------
//Ф-я createCounter, которая создает счетчик с 3мя методами: increment, decrement и выводит значение в консоль через 1 секунду

function createCounter(a) {
	let sum = a;
	let obj = {
		increment() {
			return (sum += 1);
		},
		decrement() {
			return (sum -= 1);
		},
		log() {
			setTimeout(() => {
				console.log(sum);
			}, 1000);
		}
	};
	return obj;
}

const counter = createCounter(10);
counter.increment();
counter.increment();
counter.decrement();
counter.log();

//------------------------------------------------------------------
//Ф-я делающая из массива телефонный номер

function createPhoneNumber(nums) {
	let part1 = nums.slice(0, 3).join('');
	let part2 = nums.slice(3, 6).join('');
	let part3 = nums.slice(6).join('');

	return `(${part1}) ${part2}-${part3}`;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

//------------------------------------------------------------------
//Ф-я возвращающая сумму первых 2 наименьших чисел массива

function func(nums) {
	const [num1, num2] = nums.sort((a, b) => a - b);

	return num1 + num2;
}

console.log(func([19, 111, 2, 22, 60, 77]));

//------------------------------------------------------------------
//Вам будет дан номер, и вам нужно будет вернуть его в виде строки в развернутом виде. Все числа будут целыми числами, больше 0.

function expandedForm(num) {
	return num
		.toString()
		.split('')
		.reverse()
		.map((digit, index) => digit * Math.pow(10, index))
		.filter((val) => val > 0)
		.reverse()
		.join(' + ');
}

// Примеры использования:
console.log(expandedForm(12)); // Вывод: '10 + 2'
console.log(expandedForm(42)); // Вывод: '40 + 2'
console.log(expandedForm(70304)); // Вывод: '70000 + 300 + 4'

//------------------------------------------------------------------
//Напишите функцию, которая принимает дату в виде строки и определяет, сколько дней прошло с начала года до этой даты. Функция должна учитывать високосные годы и возвращать корректное количество дней для любой заданной даты в формате YYYY-MM-DD.

function daysSinceYearStart(dateString) {
	const date = new Date(dateString);
	const startOfYear = new Date(date.getFullYear(), 0, 1);

	const msPerDay = 24 * 60 * 60 * 1000;
	const diffInMs = date - startOfYear;

	return Math.ceil(diffInMs / msPerDay);
}

console.log(daysSinceYearStart('2024-03-01')); // Ожидаемый результат: 61

//------------------------------------------------------------------
//Напишите функцию, которая принимает отсортированный список целых чисел и возвращает строку, в которой числа либо записаны по одному, либо указаны диапазоны через дефис, если диапазон содержит хотя бы три последовательных числа.

function solution(list) {
	let result = [];
	let i = 0;

	while (i < list.length) {
		let start = list[i];
		while (list[i + 1] - list[i] === 1) i++;
		let end = list[i];

		if (end - start >= 2) {
			result.push(`${start}-${end}`);
		} else {
			result.push(start.toString());
			if (end !== start) {
				result.push(end.toString());
			}
		}
		i++;
	}

	return result.join(',');
}

console.log(solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20])); // "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"

//------------------------------------------------------------------
//Напишите функцию, которая принимает массив чисел и группирует последовательные числа в виде подмассивов. Если числа идут друг за другом, их нужно объединить в один подмассив. Если нет, каждое число должно остаться отдельным элементом в результирующем массиве.
//Пример: Для массива [1, 2, 3, 5, 6, 8, 9, 10] функция должна вернуть [[1, 2, 3], [5, 6], [8, 9, 10]].

function packSequences(arr) {
	let result = [];
	let temp = [];

	for (let i = 0; i < arr.length; i++) {
		if (temp.length === 0 || arr[i] === arr[i - 1] + 1) {
			temp.push(arr[i]);
		} else {
			result.push(temp);
			temp = [arr[i]];
		}
	}
	if (temp.length > 0) result.push(temp);

	return result;
}

// Пример использования:
console.log(packSequences([1, 2, 3, 5, 6, 8, 9, 10])); // [[1, 2, 3], [5, 6], [8, 9, 10]]

//------------------------------------------------------------------
//Поиск первого повторяющегося слова
//Напишите функцию, которая принимает строку и возвращает первое слово, которое повторяется. Если повторяющихся слов нет, вернуть null.

function findFirstRepeatedWord(sentence) {
	const words = sentence.toLowerCase().split(/\s+/); // Преобразуем в массив слов
	const seen = new Set();

	for (const word of words) {
		if (seen.has(word)) {
			return word; // Возвращаем первое повторяющееся слово
		}
		seen.add(word);
	}

	return null; // Если повторений нет
}

console.log(findFirstRepeatedWord('The quick brown fox jumps over the lazy dog jumps again')); // Ожидаемый результат: "the"

console.log(findFirstRepeatedWord('JavaScript is awesome and amazing')); // Ожидаемый результат: null

//------------------------------------------------------------------
//Сортировка массива объектов по ключу
//Напишите функцию, которая принимает массив объектов и имя ключа, по которому нужно выполнить сортировку. Функция должна возвращать новый массив, отсортированный по указанному ключу в порядке возрастания.

function sortByKey(array, key) {
	return [...array].sort((a, b) => a[key] - b[key]);
}

const data = [
	{ name: 'Alice', age: 25 },
	{ name: 'Bob', age: 22 },
	{ name: 'Charlie', age: 30 }
];

const sorted = sortByKey(data, 'age');
console.log(sorted);
// Ожидаемый результат:
// [
//   { name: "Bob", age: 22 },
//   { name: "Alice", age: 25 },
//   { name: "Charlie", age: 30 }
// ]

//------------------------------------------------------------------
//Рендер списка элементов с динамическим ключом

//Напишите функцию, которая принимает массив объектов и имя ключа. Функция должна возвращать HTML-строку, содержащую список (<ul>), где каждый элемент списка (<li>) отображает значение указанного ключа из каждого объекта.

function renderList(array, key) {
	const items = array.map((item) => `<li>${item[key]}</li>`).join('');
	return `<ul>${items}</ul>`;
}

const dataObj = [
	{ id: 1, name: 'Alice', role: 'Frontend Developer' },
	{ id: 2, name: 'Bob', role: 'Backend Developer' },
	{ id: 3, name: 'Charlie', role: 'DevOps Engineer' }
];

const renderedList = renderList(dataObj, 'name');
console.log(renderedList); // Ожидаемый результат: // "<ul><li>Alice</li><li>Bob</li><li>Charlie</li></ul>"

//------------------------------------------------------------------
// Напишите функцию, которая принимает строку и перемещает первую букву каждого слова в конец, а затем добавляет «ay» в конец слова.

function pigIt(str) {
	return str
		.split(' ')
		.map((word) => word.substring(1) + word.charAt(0) + 'ay')
		.join(' ');
}

console.log(pigIt('Pig latin is cool')); // 'igPay atinlay siay oolcay'
console.log(pigIt('This is my string')); // 'hisTay siay ymay tringsay'
//------------------------------------------------------------------
