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
