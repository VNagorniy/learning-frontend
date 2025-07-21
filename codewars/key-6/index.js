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
