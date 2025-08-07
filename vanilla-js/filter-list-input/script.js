//Создайте поле ввода и список элементов. При вводе текста в поле должны отображаться только те элементы списка, которые содержат введённый текст. Игнорируйте регистр символов.

//Требования:

//• При вводе текста выполняется фильтрация: сравниваем введённую строку с каждым элементом списка.
//• Элементы, соответствующие фильтру, остаются видимыми, остальные скрываются.

const input = document.getElementById('filterInput');
const listItems = document.querySelectorAll('#items li');

input.addEventListener('input', () => {
	const filter = input.value.toLowerCase();
	listItems.forEach((li) => {
		li.style.display = li.textContent.toLowerCase().includes(filter) ? '' : 'none';
	});
});
