## Оглавление

- [Flyweight паттерн](#flyweight-паттерн)
  - [Пример использования](#пример-использования)

# Flyweight паттерн

**Шаблон «Приспособленец»** — полезный способ экономии памяти при создании большого количества однотипных объектов.

> **В JavaScript эту проблему можно легко решить с помощью прототипного наследования**. В настоящее время объём оперативной памяти оборудования исчисляется гигабайтами, что делает шаблон «приспособленца» менее актуальным.

## Пример использования

_В нашем приложении мы хотим, чтобы пользователи могли добавлять книги._ У каждой книги есть **title**, **author** и **isbn** номер! Однако в библиотеке обычно хранится не один экземпляр книги, а несколько её экземпляров.

Было бы не очень полезно каждый раз создавать новый экземпляр книги, если существует несколько копий одной и той же книги.

```js
class Book {
	constructor(title, author, isbn) {
		this.title = title;
		this.author = author;
		this.isbn = isbn;
	}
}
```

Cоздадим функционал для добавления новых книг в список. Если у книги тот же номер ISBN, то есть тот же тип книги, нам не нужно создавать совершенно новый Book экземпляр. Вместо этого нужно сначала проверить, существует ли эта книга.

```js
const books = new Map();

const createBook = (title, author, isbn) => {
	const existingBook = books.has(isbn);

	if (existingBook) {
		return books.get(isbn);
	}
};
```

Если в наборе еще нет номера ISBN книги, мы создадим новую книгу и добавим ее номер ISBN в **isbnNumbers** набор.

```js
const createBook = (title, author, isbn) => {
	const existingBook = books.has(isbn);

	if (existingBook) {
		return books.get(isbn);
	}

	const book = new Book(title, author, isbn);
	books.set(isbn, book);

	return book;
};
```

Эта **createBook** функция помогает нам создавать новые экземпляры книг одного типа. **Однако в библиотеке обычно хранится несколько экземпляров одной и той же книги!** Давайте создадим функцию **addBook**, которая позволит нам добавлять несколько экземпляров одной и той же книги. Она должна вызывать **createBook** функцию, которая возвращает либо _новый Book_ экземпляр, либо _уже существующий_.

Чтобы отслеживать общее количество экземпляров, давайте создадим **bookList** массив, содержащий общее количество книг в библиотеке.

```js
const bookList = [];

const addBook = (title, author, isbn, availability, sales) => {
	const book = {
		...createBook(title, author, isbn),
		sales,
		availability,
		isbn
	};

	bookList.push(book);
	return book;
};
```

Вместо того, чтобы создавать новый **Book** экземпляр каждый раз при добавлении копии, мы можем эффективно использовать уже существующий **Book** экземпляр для этой конкретной копии.

Cоздадим 5 копий трёх книг: «Гарри Поттер», «Убить пересмешника» и «Великий Гэтсби».

```js
addBook('Harry Potter', 'JK Rowling', 'AB123', false, 100);
addBook('Harry Potter', 'JK Rowling', 'AB123', true, 50);
addBook('To Kill a Mockingbird', 'Harper Lee', 'CD345', true, 10);
addBook('To Kill a Mockingbird', 'Harper Lee', 'CD345', false, 20);
addBook('The Great Gatsby', 'F. Scott Fitzgerald', 'EF567', false, 20);
```

[Пример реализации](https://codesandbox.io/embed/wandering-firefly-m5c31).

<hr>
