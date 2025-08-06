//Валидация формы с обратной связью

//Создайте форму с одним полем ввода для имени и кнопкой "Отправить". При отправке формы выполните следующие условия:

//1. Если поле пустое, отобразите сообщение об ошибке под полем.
//2. Если поле заполнено, отобразите сообщение "Форма успешно отправлена!".
//3. Сообщение об ошибке исчезает при вводе текста.

const form = document.getElementById('myForm');
const nameInput = document.getElementById('nameInput');
const error = document.getElementById('error');
const success = document.getElementById('success');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	if (nameInput.value.trim() === '') {
		error.style.display = 'block';
		success.style.display = 'none';
	} else {
		error.style.display = 'none';
		success.style.display = 'block';
		nameInput.value = '';
	}
});

nameInput.addEventListener('input', () => {
	if (nameInput.value.trim() !== '') {
		error.style.display = 'none';
	}
});
