## Event delegation

**Event delegation** — это техника, позволяющая обрабатывать события на родительском элементе вместо установки обработчиков на каждый дочерний элемент. Это особенно полезно, если дочерние элементы динамически добавляются или их много.

```js
// Родительский элемент
const parent = document.querySelector('#parent');

// Используем делегирование
parent.addEventListener('click', (event) => {
	if (event.target.matches('.child')) {
		console.log(`Клик по элементу: ${event.target.textContent}`);
	}
});

// Динамическое добавление дочерних элементов
const newChild = document.createElement('div');
newChild.className = 'child';
newChild.textContent = 'Новый элемент';
parent.appendChild(newChild);
```

В этом примере обработчик событий на родительском элементе обрабатывает клики по дочерним элементам, включая добавленные динамически. Это упрощает код и повышает производительность.

<hr/>

## ⚙️ Что такое Passive Event Listeners в JavaScript и зачем они используются?

**Passive Event Listeners** — это специальный режим для обработчиков событий, который сообщает браузеру, что обработчик не вызовет preventDefault(). Это помогает повысить производительность при работе со скроллом и touch-событиями.

➡️ Пример:

```js
window.addEventListener(
	'scroll',
	() => {
		console.log('Прокрутка страницы');
	},
	{ passive: true }
);
```

🗣️ В этом примере флаг { passive: true } говорит браузеру, что обработчик не будет блокировать прокрутку. Это позволяет браузеру ускорить отрисовку и сделать скроллинг более плавным.

Рекомендуется использовать passive listeners для событий scroll, touchstart, touchmove на мобильных устройствах.
Подробнее [тут](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#parameters)

<hr/>
