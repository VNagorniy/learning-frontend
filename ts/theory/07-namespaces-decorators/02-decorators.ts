{
	// Декораторы в TypeScript - это специальный вид объявления, который можно прикрепить
	// к классу, методу, свойству или параметру. Они позволяют добавить дополнительную
	// функциональность или изменить поведение элемента, к которому прикреплены.
	// Декораторы нужны для метапрограммирования - возможности модифицировать код во время
	// выполнения программы, добавляя или изменяя поведение элементов кода динамически.
	// Чтобы декораторы работали в tsconfig.json нужно включить "experimentalDecorators": true,
	// также можно использовать //@ts-ignore чтобы отключить проверку на ошибки (используйте в крайнем случае)
	// Декораторы класса для логирования

	function Logging1(constructor: Function) {
		console.log('Logging', constructor);
	}

	function Logging2(target: any, propertyKey: string | Symbol): void {
		console.log('ClassLogging2 [target]', target);
		console.log('ClassLogging2 [propertyKey]', propertyKey);
	}

	function Logging3(target: any, propertyKey: string, descriptor: PropertyDescriptor): void {
		console.log('ClassLogging3 [target]', target);
		console.log('ClassLogging3 [propertyKey]', propertyKey);
		console.log('ClassLogging3 [descriptor]', descriptor);
	}

	@Logging1
	class MyClass {
		@Logging2
		name: string;

		constructor(name: string) {
			this.name = name;
		}

		@Logging3
		getName(): string {
			return this.name;
		}
	}

	const myClass = new MyClass('Vova');
}
