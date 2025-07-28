// Утверждение типов - это способ сообщить компилятору что какое-то значение имеет какой-то определенный тип

const someValue1: any = 'this is str';
const stringLength1: number = (<string>someValue1).length;

console.log(stringLength1);

//2-вариант утверждения типов через as
const someValue2: any = 'this is str';
const stringLength2: number = (someValue2 as string).length;

console.log(stringLength2);

//--------------------
// ! - это non-null assertion, т.е значение не равно null
const myElement: HTMLElement | null = document.getElementById('myElement');

myElement && (myElement.style.color = 'red');
myElement!.style.color = 'red';

// @ts-ignore
myElement.style.color = 'red';
