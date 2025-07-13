Array.prototype.myMap = function (callback) {
	let newArray = [];
	let x = this.length;
	for (let i = 0; i < x; i++) {
		let counter = callback(this[i]);
		newArray.push(counter);
	}
	return newArray;
};

let arr = [1, 2, 3];
arr = arr.myMap((e) => e * 2);
console.log(arr);
