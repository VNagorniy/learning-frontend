//Динамический список задач с возможностью удаления

//Создайте простой список задач, где пользователь может добавлять новые задачи через текстовое поле и удалять существующие задачи по кнопке "Удалить" рядом с каждой из них.

//Ожидаемое поведение:

//• Пользователь вводит текст задачи в поле и нажимает кнопку "Добавить".
//• Новая задача добавляется в список с кнопкой "Удалить" рядом с ней.
//• При нажатии на кнопку "Удалить" задача исчезает из списка.

const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

addButton.addEventListener('click', () => {
	const taskText = taskInput.value.trim();
	if (taskText === '') return; // Не добавляем пустые задачи

	const listItem = document.createElement('li');
	listItem.textContent = taskText;

	const deleteButton = document.createElement('button');
	deleteButton.textContent = 'Удалить';
	deleteButton.style.marginLeft = '10px';

	deleteButton.addEventListener('click', () => {
		taskList.removeChild(listItem);
	});

	listItem.appendChild(deleteButton);
	taskList.appendChild(listItem);

	taskInput.value = ''; // Очищаем поле ввода
});
