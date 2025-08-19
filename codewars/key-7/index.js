//JS Golfing #8: Is it Uppercase? https://www.codewars.com/kata/5c52e7ae9fbc3232b8372deb/train/javascript
f = (s) => s < {};

//number with 3 roots. https://www.codewars.com/kata/5932c94f6aa4d1d786000028/train/javascript
function perfectRoots(n) {
	return Math.pow(n, 1 / 8) % 1 === 0 ? true : false;
}

//How many are smaller than me? https://www.codewars.com/kata/56a1c074f87bc2201200002e/train/javascript
function smaller(nums) {
	let smallerArr = nums.map((number, idx) => {
		return nums.slice(idx).filter((num) => num < number).length;
	});

	return smallerArr;
}

//Parts of a list https://www.codewars.com/kata/56f3a1e899b386da78000732/train/javascript
function partlist(arr) {
	let itemNumber = 1;
	let partlistArr = [];

	while (itemNumber < arr.length) {
		partlistArr.push([arr.slice(0, itemNumber).join(' '), arr.slice(itemNumber).join(' ')]);
		itemNumber++;
	}

	return partlistArr;
}

//Exes and Ohs https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript
function XO(str) {
	str = str.toLowerCase();

	let xCount = 0;
	let oCount = 0;

	for (let char of str) {
		if (char === 'x') xCount++;
		if (char === 'o') oCount++;
	}

	return xCount === oCount;
}

//------------------------------
//Two to One https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript
//Возьмите 2 строки s1 и s2, включающие только буквы от a до z. Верните новую отсортированную строку, максимально длинную, содержащую различные буквы - каждая из которых берется только один раз - исходящие из s1 или s2.

function longest(s1, s2) {
	let combined = s1 + s2;

	let uniqueChars = [...new Set(combined)];

	uniqueChars.sort();

	return uniqueChars.join('');
}
