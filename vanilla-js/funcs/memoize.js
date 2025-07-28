const memoize = (fn) => {
	const cache = {};
	return function (param) {
		if (cache[param]) {
			return cache[param];
		} else {
			const result = fn(param);
			cache[param] = result;
			return result;
		}
	};
};

//Base function
const toUpper = (str = '') => str.toUpperCase();
//Memoized base function
const toUpperMemoized = memoize(toUpper);

toUpperMemoized('Vova'); // Вызовет ф-ю toUpper
toUpperMemoized('Vova'); //вернет из кэша
