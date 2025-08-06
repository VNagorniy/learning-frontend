//Вкладки с переключением содержимого

//Создайте интерфейс с вкладками, где при клике на вкладку отображается соответствующее содержимое, а остальные скрываются. Одна из вкладок должна быть активной по умолчанию.

//Ожидаемое поведение:

//• При клике на вкладку отображается её содержимое.
//• Содержимое других вкладок скрывается.
//• Активная вкладка подсвечивается.

const buttons = document.querySelectorAll('.tab-button');
const contents = document.querySelectorAll('.tab-content');

buttons.forEach((button) => {
	button.addEventListener('click', () => {
		buttons.forEach((btn) => btn.classList.remove('active'));
		contents.forEach((content) => (content.style.display = 'none'));

		button.classList.add('active');
		document.getElementById(button.dataset.target).style.display = 'block';
	});
});
