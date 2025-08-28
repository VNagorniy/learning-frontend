//Создать веб-страницу со списком дел, где каждая задача имеет название и статус выполнения.

const tasks = [
	{ title: 'Купить продукты на неделю', isDone: false },
	{ title: 'Полить цветы', isDone: true },
	{ title: 'Сходить на тренировку', isDone: false }
];

const rootEl = document.getElementById('root'); // Находим наш корневой <div> по id
const headerEl = document.createElement('h1'); // создаем тег заголовка для страницы
headerEl.append('Список дел'); // добавляем текст в заголовок
rootEl.append(headerEl); //добавляем заголовок в корневой div

const tasksEl = document.createElement('ul'); //создаем список задач

tasks.forEach((task) => {
	const taskEL = document.createElement('li'); //создаем элемент списка
	const taskTitleEL = document.createElement('div'); // создаем элемент для заголовка списка
	taskTitleEL.append(task.title); // добавляем заголовок списка в наш div
	taskEL.append(taskTitleEL); //добавляем элемент списка в список

	const taskInputEL = document.createElement('input'); //создаем тег input
	taskInputEL.type = 'checkbox'; // говорим, что нам нужен checkbox для input
	taskInputEL.checked = task.isDone; //добавляем статус галочки на нашу задачу
	taskEL.append(taskInputEL); // и добавляем задачу в список

	tasksEl.append(taskEL); //добавляем задачу в список задач
});
rootEl.append(tasksEl);
