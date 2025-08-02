const button = document.getElementById('timer-button');

button.addEventListener('click', () => {
	let countdown = 5;

	// Деактивируем кнопку и запускаем таймер
	button.disabled = true;
	const interval = setInterval(() => {
		button.textContent = `Ждите... ${countdown}`;
		countdown--;

		if (countdown < 0) {
			clearInterval(interval);
			button.disabled = false;
			button.textContent = 'Нажми меня';
		}
	}, 1000);
});
