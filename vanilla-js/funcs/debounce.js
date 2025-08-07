//debounce — это техника, которая откладывает выполнение функции, пока пользователь не прекратит вызывать её в течение заданного времени.

//Полезно для:
//* Обработки input в текстовых полях
//* Поиска по мере ввода
//* Scroll, resize, keypress и др.
function debounce(func, delay) {
	let timeoutId;
	return function (...args) {
		clearTimeout(timeoutId); // отменить предыдущий таймер
		timeoutId = setTimeout(() => {
			func.apply(this, args); // вызвать функцию с сохранённым контекстом и аргументами
		}, delay);
	};
}

// const debounce = (cb, timer) => () => setTimeout(cb, timer);
// const onInput = debounce(() => console.log('API call'), 6000);
// onInput();
