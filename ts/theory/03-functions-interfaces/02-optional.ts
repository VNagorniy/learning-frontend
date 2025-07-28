// ? - опциональный параметр

function greetHello(name: string, message?: string): string {
	if (message) {
		return `Hello, ${name}, ${message}`;
	}
	return `Hello, ${name}`;
}

console.log(greetHello('Vov4chik'));
console.log(greetHello('Petr', 'Hi'));
