## Что такое Intersection Observer в JavaScript и зачем он используется?

**Intersection Observer** — это API, которое позволяет отслеживать, когда элемент входит или выходит из области видимости (viewport). Оно полезно для оптимизации ленивой загрузки изображений, бесконечной прокрутки или анимаций при прокрутке.

_Пример:_

```js
// Целевой элемент для наблюдения
const target = document.querySelector('.observe-me');

// Callback-функция для обработки пересечений
const observerCallback = (entries, observer) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			console.log('Элемент видим:', entry.target);
			observer.unobserve(entry.target); // Останавливаем наблюдение
		}
	});
};

// Настройки наблюдателя
const observerOptions = {
	root: null, // Вся область видимости
	threshold: 0.5 // 50% видимости элемента
};

// Создаем наблюдатель
const observer = new IntersectionObserver(observerCallback, observerOptions);

// Начинаем наблюдение за элементом
observer.observe(target);
```

🗣️ В этом примере API отслеживает, когда .observe-me становится видимым на 50%. Intersection Observer делает прокрутку более производительной, так как избавляет от необходимости использовать события scroll.
