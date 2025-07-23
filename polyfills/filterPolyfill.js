const digits = [1, 2, 3, 4, 5];

Array.prototype.myFilter = function (func) {
	const result = [];
	this.forEach((el) => (func(el) ? result.push(el) : ''));
	return result;
};

console.log(digits.myFilter((item) => item % 2));
