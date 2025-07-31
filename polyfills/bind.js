const obj = {
	a: 1,
	say(arg1, arg2) {
		if (arg1 !== undefined && arg2 !== undefined) {
			console.log(this.a + arg1 + arg2);
		} else {
			console.log(this.a);
		}
	}
};

Function.prototype.myBind = function (myThis, ...myArgs) {
	const fn = this;
	return function (...args) {
		fn.apply(myThis, myArgs.concat(args));
	};
};

const fn = obj.say;
fn.myBind(obj, 1)(2);
