## Что такое Document.execCommand в JavaScript и зачем он используется?

**Document.execCommand** позволяет выполнять команды редактирования текста, такие как копирование или вставка.

➡️ Пример:

```js
// Функция для копирования текста
function copyText(text) {
	const input = document.createElement('textarea');
	input.value = text;
	document.body.appendChild(input);
	input.select();
	document.execCommand('copy'); // Копируем текст
	document.body.removeChild(input);
	console.log('Скопировано:', text);
}

// Использование функции
copyText('Пример текста для копирования');
```

🗣️ В этом примере текст помещается в скрытое поле, выделяется и копируется в буфер обмена с помощью execCommand. Этот метод полезен для простых операций копирования.

<hr/>

## ⚙️ Разница между innerHTML и textContent в JavaScript

**innerHTML** и **textContent** используются для работы с содержимым HTML-элементов, но они работают по-разному.
• innerHTML позволяет получить или изменить HTML-разметку внутри элемента.
• textContent выводит только текстовое содержимое без HTML-тегов

➡️ Пример:

```js
const div = document.createElement('div');
div.innerHTML = '<b>Привет</b> мир!';
console.log(div.innerHTML); // <b>Привет</b> мир!
console.log(div.textContent); // Привет мир!
```

🗣️ Используйте innerHTML, если нужно работать с тегами и разметкой, а textContent — для безопасного вывода текста без HTML.
textContent быстрее и безопаснее, так как не интерпретирует HTML
Подробнее [тут](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)

<hr/>
