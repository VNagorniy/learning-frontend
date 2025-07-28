//Any и unknown
// type ANY_TODO = any;

const anyValue: any = 'sadasd';

//unknown
let value: unknown;

value = 10;
value = false;
value = 'apple';

if (typeof value === 'string') {
	console.log(value.toLowerCase());
}
