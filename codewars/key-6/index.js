//Triangle type https://www.codewars.com/kata/53907ac3cd51b69f790006c5/train/javascript
/* Should return ᐃ type:
  0 : if ᐃ cannot be made with given sides
  1 : acute ᐃ
  2 : right ᐃ
  3 : obtuse ᐃ
*/
function triangleType(a, b, c) {
	let largestSide = Math.max(a, b, c);
	let smallSide = Math.min(a, b, c);
	let middleSide = a + b + c - (largestSide + smallSide);

	if (smallSide + middleSide <= largestSide) {
		return 0;
	}

	if (smallSide ** 2 + middleSide ** 2 < largestSide ** 2) {
		return 3;
	} else if (smallSide ** 2 + middleSide ** 2 > largestSide ** 2) {
		return 1;
	} else {
		return 2;
	}
}

//Equal Sides Of An Array. https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/javascript
function findEvenIndex(arr) {
	for (let i = 0; i < arr.length; i++) {
		let left = arr.slice(0, i + 1).reduce((acc, val) => acc + val, 0);
		let right = arr.slice(i).reduce((acc, val) => acc + val, 0);

		if (left === right) {
			return i;
		}
	}

	return -1;
}

//Sum of Digits / Digital Root https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript
function digitalRoot(n) {
	let nToStr = n.toString();

	while (nToStr.length >= 2) {
		nToStr = nToStr
			.split('')
			.reduce((acc, val) => acc + Number(val), 0)
			.toString();
	}
	return Number(nToStr);
}
