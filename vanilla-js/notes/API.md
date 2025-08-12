## Что такое Performance API в JavaScript и зачем он используется?

**Performance API** — это набор методов для измерения времени выполнения кода и анализа производительности веб-страницы. Он полезен для оптимизации загрузки, рендеринга и обработки пользовательских взаимодействий.

➡️ Пример:

```js
const start = performance.now(); // Начало измерения

// Выполнение задачи
for (let i = 0; i < 1e6; i++) {}

const end = performance.now(); // Конец измерения
console.log(`Время выполнения: ${end - start}ms`);
```

🗣️ В этом примере Performance API измеряет время выполнения цикла. Этот инструмент помогает находить узкие места в производительности и оптимизировать критически важные части кода.

<hr/>

## ⚙️ Что такое AbortController в JavaScript и зачем он используется?

**AbortController** — это API, который позволяет отменять асинхронные операции, такие как запросы fetch. Это полезно для предотвращения утечек ресурсов и отмены операций, которые больше не нужны.

➡️ Пример:

```js
const controller = new AbortController();
const signal = controller.signal;

// Отправляем запрос с возможностью отмены
fetch('https://jsonplaceholder.typicode.com/posts', { signal })
	.then((response) => response.json())
	.then((data) => console.log(data))
	.catch((err) => {
		if (err.name === 'AbortError') {
			console.log('Запрос был отменён');
		} else {
			console.error(err);
		}
	});

// Отмена запроса через 500 мс
setTimeout(() => controller.abort(), 500);
```

🗣️ В этом примере AbortController отменяет запрос через 500 мс. Это позволяет избежать обработки ненужных данных, если, например, пользователь покинул страницу или отменил действие.
Подробнее [тут](https://developer.mozilla.org/ru/docs/Web/API/AbortController)

<hr/>
