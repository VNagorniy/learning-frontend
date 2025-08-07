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

## Что такое Promise.race в JavaScript и зачем он используется?

**Promise.race** принимает массив промисов и возвращает результат первого завершившегося промиса (успешного или с ошибкой). Полезен для задач, где важен самый быстрый результат или требуется таймаут.

➡️ Пример:

```js
const promise1 = new Promise((res) => setTimeout(() => res('Промис 1'), 1000));
const promise2 = new Promise((res) => setTimeout(() => res('Промис 2'), 500));

Promise.race([promise1, promise2]).then(console.log); // 'Промис 2'
```

🗣️ В этом примере Promise.race возвращает promise2, так как он завершился быстрее.
Подробнее [тут](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race)

<hr/>

## ⚙️ Что такое Promise.any в JavaScript и зачем он используется?

**Promise.race** принимает массив промисов и возвращает результат первого завершившегося промиса (успешного или с ошибкой). Полезен для задач, где важен самый быстрый результат или требуется таймаут.

➡️ Пример:

```js
const promise1 = new Promise((_, rej) => setTimeout(() => rej('Ошибка 1'), 1000));
const promise2 = new Promise((res) => setTimeout(() => res('Промис 2'), 500));
const promise3 = new Promise((res) => setTimeout(() => res('Промис 3'), 800));

Promise.any([promise1, promise2, promise3]).then(console.log).catch(console.error); // 'Промис 2'
```

🗣️ В этом примере Promise.any возвращает результат promise2, так как он первый завершился успешно. Если все промисы отклонены, срабатывает catch.
Подробнее [тут](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any)

<hr/>
