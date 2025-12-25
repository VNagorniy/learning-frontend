// Необходимо реализовать функцию pluck, которая:
// Принимает массив объектов и ключ (свойство этих объектов)
// Возвращает массив значений указанного свойства из каждого объекта
// Должна быть строгая типизация, чтобы:
// Ключ обязательно существует в объектах
// Возвращаемый тип соответствует типу значений этого свойства

function pluck<T, K extends keyof T>(items: T[], key: K): T[K][] {
	return items.map((item) => item[key]);
}

// Пример использования:
interface Person {
	name: string;
	age: number;
}

const people: Person[] = [
	{ name: 'Alice', age: 30 },
	{ name: 'Bob', age: 25 }
];

//Пример результата
const names = pluck(people, 'name'); //Должно вернуться ['Alice','Bob']
const ages = pluck(people, 'age'); //Должно вернуться [30,25]
