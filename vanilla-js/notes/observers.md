## Что такое Mutation Observer в JavaScript и зачем он используется?

**Mutation Observer** — это API, которое позволяет отслеживать изменения в DOM-дереве, такие как добавление или удаление узлов, изменение атрибутов и текстового содержимого. Это полезно для реактивных интерфейсов и выполнения кода в ответ на динамические изменения.

```js
// Целевой элемент для наблюдения
const target = document.querySelector('.observe-me');

// Callback-функция для обработки изменений
const observerCallback = (mutationsList, observer) => {
	mutationsList.forEach((mutation) => {
		if (mutation.type === 'childList') {
			console.log('Добавлены или удалены узлы:', mutation.addedNodes);
		} else if (mutation.type === 'attributes') {
			console.log('Изменён атрибут:', mutation.attributeName);
		}
	});
};

// Настройки наблюдателя
const observerOptions = {
	childList: true, // Отслеживаем изменения в дочерних узлах
	attributes: true, // Отслеживаем изменения атрибутов
	subtree: true // Отслеживаем изменения во всех вложенных узлах
};

// Создаем наблюдатель
const observer = new MutationObserver(observerCallback);

// Начинаем наблюдение
observer.observe(target, observerOptions);
// Пример изменений
target.setAttribute('data-example', '123'); // Изменяется атрибут
target.appendChild(document.createElement('div')); // Добавляется дочерний элемент
```

В этом примере Mutation Observer отслеживает изменения в целевом элементе и выводит информацию об изменениях. API полезен для отслеживания динамически изменяемых интерфейсов без использования затратных событий, таких как setInterval.

<hr/>

## Что такое Resize Observer в JavaScript и зачем он используется?

**Resize Observer** — это API, которое позволяет отслеживать изменения размеров элементов. Оно полезно для адаптации интерфейсов к динамическим изменениям размеров без использования событий resize для окна.
_Пример_

```js
const target = document.querySelector('.resize-me');

const observer = new ResizeObserver((entries) => {
	entries.forEach((entry) => {
		console.log('Новые размеры:', entry.contentRect.width, entry.contentRect.height);
	});
});

observer.observe(target);
```

🗣️ В этом примере Resize Observer отслеживает изменения размеров элемента .resize-me и выводит новые ширину и высоту. Это делает интерфейс более отзывчивым и упрощает обработку адаптивных компонентов.

<hr/>
