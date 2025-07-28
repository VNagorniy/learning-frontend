// | union types - типы объединения, чтобы переменная имела несколько типов

let result: string | number;

result = 10;
result = 'dasda';

function printResult(value: number | string) {
	console.log(`Result ${value}`);
}

printResult(12);
printResult('check');
// printResult(false);
