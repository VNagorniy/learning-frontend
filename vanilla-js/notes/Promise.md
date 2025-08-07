## Что такое Promise.allSettled в JavaScript и зачем он используется?

**Promise.allSettled** — это метод, который принимает массив промисов и возвращает результат всех промисов, даже если некоторые из них были отклонены. Он полезен, когда нужно дождаться выполнения всех промисов независимо от их статуса (успех или ошибка).

➡️ Пример:

```js
const promises = [Promise.resolve('Успешно!'), Promise.reject('Ошибка!'), Promise.resolve('Ещё один успех!')];

Promise.allSettled(promises).then((results) => {
	console.log(results);
});
```

🗣️ В этом примере Promise.allSettled возвращает массив с результатами всех промисов, каждый из которых содержит статус (fulfilled или rejected) и значение или причину ошибки.
Подробнее [тут](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled)

<hr/>
