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
