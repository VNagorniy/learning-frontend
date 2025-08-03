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
