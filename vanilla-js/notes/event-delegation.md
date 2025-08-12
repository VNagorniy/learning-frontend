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

## ⚙️ Что такое event.stopPropagation() в JavaScript и зачем он нужен?

**event.stopPropagation()** используется для остановки всплытия события. Это значит, что событие не будет "подниматься" вверх по DOM-дереву и вызывать обработчики на родительских элементах

➡️ Пример:

```html
<div id="parent">
	<button id="child">Кликни меня</button>
</div>

<script>
	document.getElementById('parent').addEventListener('click', () => {
		console.log('Клик по родителю');
	});

	document.getElementById('child').addEventListener('click', (event) => {
		event.stopPropagation();
		console.log('Клик по кнопке');
	});
</script>
```

В этом примере при клике на кнопку сработает только обработчик кнопки. Обработчик родителя не вызовется, потому что stopPropagation() остановил всплытие. Это полезно для изоляции поведения компонентов и предотвращения нежеланных побочных эффектов.
Подробнее [тут](https://developer.mozilla.org/ru/docs/Web/API/Event/stopPropagation)

<hr/>
## ⚙️ Что такое event.preventDefault() в JavaScript и зачем он нужен?
**event.preventDefault()** используется для отмены действия браузера по умолчанию, связанного с событием. Это особенно полезно, если вы хотите реализовать свою логику вместо стандартного поведения (например, при отправке формы или переходе по ссылке).

➡️ Пример:

```html
<a href="https://example.com" id="link">Перейти</a>

<script>
	document.getElementById('link').addEventListener('click', (event) => {
		event.preventDefault();
		console.log('Переход по ссылке отменён');
	});
</script>
```

В этом примере при клике на ссылку браузер не перейдёт по адресу. Вместо этого выполнится только ваша функция. Это часто используется в формах, при работе с SPA и кастомных интерфейсах.
Подробнее [тут](https://developer.mozilla.org/ru/docs/Web/API/Event/preventDefault)

<hr/>
