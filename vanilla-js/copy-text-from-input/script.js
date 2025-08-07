//Копирование текста по кнопке

//Создайте простую страницу с текстовым полем и кнопкой. При нажатии на кнопку содержимое текстового поля должно копироваться в буфер обмена. После успешного копирования рядом с кнопкой должно появляться сообщение "Текст скопирован!".

const copyButton = document.getElementById('copyButton');
const textInput = document.getElementById('textInput');
const message = document.getElementById('message');

copyButton.addEventListener('click', async () => {
	try {
		await navigator.clipboard.writeText(textInput.value);
		message.style.display = 'inline';
		setTimeout(() => {
			message.style.display = 'none';
		}, 2000);
	} catch (err) {
		alert('Не удалось скопировать текст');
	}
});
