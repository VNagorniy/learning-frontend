// Напишите функцию throttle, которая ограничивает количество вызовов переданной функции. Функция должна вызываться не чаще, чем один раз в указанный временной интервал. Это полезно для оптимизации производительности, например, при обработке событий скроллинга или ресайза окна.

function throttle(func, delay) {
	let lastCall = 0;

	return function (...args) {
		const now = new Date().getTime();
		if (now - lastCall >= delay) {
			lastCall = now;
			return func(...args);
		}
	};
}

const log = throttle(console.log, 1000);

log('Hello'); // Вызовется сразу
log('World'); // Игнорируется, т.к. прошло меньше 1000ms
setTimeout(() => log('Again'), 1500); // Вызовется через 1.5 секунды
