//Сортировка таблицы по столбцам

//Создайте таблицу с данными и добавьте возможность сортировки по столбцам при клике на заголовок. Сортировка должна чередоваться между восходящей и нисходящей.

document.querySelectorAll('#dataTable th').forEach((th, index) => {
	let asc = true;
	th.addEventListener('click', () => {
		const tbody = th.closest('table').querySelector('tbody');
		const rows = Array.from(tbody.rows);
		rows.sort((a, b) => {
			const aText = a.cells[index].textContent;
			const bText = b.cells[index].textContent;
			return asc ? aText.localeCompare(bText, undefined, { numeric: true }) : bText.localeCompare(aText, undefined, { numeric: true });
		});
		tbody.append(...rows);
		asc = !asc;
	});
});
