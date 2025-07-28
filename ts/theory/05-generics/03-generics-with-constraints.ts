function logValue<T extends { value: string }>(obj: T): void {
	console.log(obj.value);
}

logValue({ value: 'Hello' });

// Пример универсального класса с типом по умолчанию
class DataHolder<T = string> {
	data: T;

	constructor(data: T) {
		this.data = data;
	}

	getData(): T {
		return this.data;
	}
}

// Пример использования
const stringHolder = new DataHolder('Some string');
console.log(stringHolder.getData());

const numberHolder = new DataHolder(123);
console.log(numberHolder.getData());
