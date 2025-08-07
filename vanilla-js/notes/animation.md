## Что такое requestAnimationFrame в JavaScript и зачем он используется?

**requestAnimationFrame** — это метод, который позволяет выполнять анимации синхронно с частотой обновления экрана. Он оптимизирует производительность анимаций и уменьшает нагрузку на процессор по сравнению с использованием setInterval или setTimeout.

➡️ Пример:

```js
let position = 0;
const element = document.querySelector('.box');

function animate() {
	position += 2;
	element.style.transform = `translateX(${position}px)`;

	if (position < 200) {
		requestAnimationFrame(animate); // Планируем следующий кадр анимации
	}
}

requestAnimationFrame(animate);
```

🗣️ В этом примере requestAnimationFrame плавно перемещает элемент .box на 200 пикселей. Этот метод автоматически учитывает частоту обновления экрана и приостанавливает анимацию при переключении вкладок, улучшая производительность.

<hr/>
