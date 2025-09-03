const digits = [1, 2, 3, 4, 5];

Array.prototype.myFilter = function (func) {
	const result = [];
	this.forEach((el) => (func(el) ? result.push(el) : ''));
	return result;
};

//2й способ
Array.prototype.myFilter = function (callback) {
	let result = [];
	for (let i = 0; i < this.length; i++) {
		if (callback(this[i], i, this)) {
			result.push(this[i]);
		}
	}
	return result;
};

console.log(digits.myFilter((item) => item % 2));
