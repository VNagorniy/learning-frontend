const input = document.getElementById('numberInput');
const button = document.getElementById('buildChart');
const chart = document.getElementById('chart');

button.addEventListener('click', () => {
	const values = input.value
		.split(',')
		.map(Number)
		.filter((num) => !isNaN(num));
	chart.innerHTML = '';

	values.forEach((value) => {
		const bar = document.createElement('div');
		bar.className = 'bar';
		bar.style.height = `${value * 2}px`; // Масштабирование для визуализации
		bar.textContent = value;
		chart.appendChild(bar);
	});
});
