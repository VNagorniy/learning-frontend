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

//------------------------------
//Counting Duplicates https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript
function duplicateCount(text) {
	let count = 0;
	let arrWithoutDuplicates = Array.from(new Set(text.toLowerCase().split('')));

	arrWithoutDuplicates.forEach((letter) => {
		if (
			text
				.toLowerCase()
				.split('')
				.filter((i) => i === letter).length - 1
		) {
			count += 1;
		}
	});
	return count;
}

//------------------------------
//Replace With Alphabet Position https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript
function alphabetPosition(text) {
	return text.toLowerCase().match(/[a-z]/g)
		? text
				.toLowerCase()
				.match(/[a-z]/g)
				.map((i) => i.charCodeAt(i) - 96)
				.join(' ')
		: '';
}

//------------------------------
//Bit Counting https://www.codewars.com/kata/526571aae218b8ee490006f4/train/javascript
function countBits(n) {
	return n.toString(2).split('0').join('').length;
}

//------------------------------
//Persistent Bugger https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript
function persistence(num) {
	let count = 0;
	let numToStr = new String(num);

	while (numToStr.length > 1) {
		count += 1;
		numToStr = numToStr
			.split('')
			.reduce((acc, val) => acc * Number(val))
			.toString();
	}

	return count;
}
console.log(persistence(39));

//------------------------------
//Take a Ten Minutes Walk https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript

function isValidWalk(walk) {
	let occurrence = walk.reduce((acc, v) => {
		return { ...acc, [v]: acc[v] ? (acc[v] += 1) : (acc[v] = 1) };
	}, {});

	return walk.length === 10 ? occurrence.n === occurrence.s && occurrence.w === occurrence.e : false;
}

console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));
console.log(isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']));

//------------------------------
//Tribonacci Sequence https://www.codewars.com/kata/556deca17c58da83c00002db/train/javascript
function tribonacci(signature, n) {
	let result = [...signature];

	if (n < 3) {
		return result.slice(0, n - 3);
	}

	for (let i = 0; i < n - 3; i++) {
		result.push(result.slice(i, i + 3).reduce((acc, val) => acc + val, 0));
	}

	return result;
}
