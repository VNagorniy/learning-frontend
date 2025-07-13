const input = document.getElementById('timeInput');
const button = document.getElementById('startButton');
const timerDisplay = document.getElementById('timer');
let timerId;

button.addEventListener('click', () => {
	const seconds = parseInt(input.value, 10);
	if (isNaN(seconds) || seconds <= 0) {
		timerDisplay.textContent = 'Введите корректное число!';
		return;
	}

	clearInterval(timerId);
	let remainingTime = seconds;

	timerDisplay.textContent = remainingTime;
	timerId = setInterval(() => {
		remainingTime -= 1;
		if (remainingTime <= 0) {
			clearInterval(timerId);
			timerDisplay.textContent = 'Время вышло!';
		} else {
			timerDisplay.textContent = remainingTime;
		}
	}, 1000);
});
