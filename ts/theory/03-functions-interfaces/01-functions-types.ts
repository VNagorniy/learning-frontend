//Типизация функций

function greet(name: string): string {
	return `Привет, ${name}`;
}
console.log(greet('Vova'));

function logMessage(message: string): void {
	console.log(message);
}
logMessage('Vladimir');

function calculateSum(a: number, b: number): number {
	return a + b;
}
console.log(calculateSum(1, 2));

function createGreeting(name: string, greeting: string = 'Привет!'): string {
	return `${greeting}, ${name}`;
}
console.log(createGreeting('Vadik'));
console.log(createGreeting('Vadik', 'Здарова'));

function sumAll(...numbers: number[]): number {
	return numbers.reduce((total, num) => total + num, 0);
}
console.log(sumAll(1, 4, 6, 3, 1));

const multiply = (a: number, b: number): number => a * b;
console.log(multiply(4, 5));
