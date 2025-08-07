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
