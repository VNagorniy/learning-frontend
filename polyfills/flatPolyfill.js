const arr = [1, 2, [3, [4]]];

Array.prototype.MyFlat = function (depth) {
	if (depth === 0) return this;

	let outArr = [];

	for (let i = 0; i < this.length; i++) {
		if (Array.isArray(this[i])) {
			outArr.push(...this[i].MyFlat(depth - 1));
		} else {
			outArr.push(this[i]);
		}
	}
	return outArr;
};

console.log(arr.MyFlat(1));
