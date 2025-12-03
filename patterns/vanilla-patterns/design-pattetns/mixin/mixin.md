## Оглавление

- [Mixin паттерн](#mixin-паттерн)
  - [Примеры использования](#примеры-использования)
- [Применение в React](#применение-в-react)

# Mixin паттерн

**Миксин** — это объект, который можно использовать для добавления функциональности, пригодной для повторного использования, к другому объекту или классу без наследования. Миксины не могут использоваться сами по себе: **их единственная цель — добавлять функциональность к объектам или классам без наследования**.

## Примеры использования

\*Например у нас есть класс Dog только с именем, который нужно дополнить функциями (лай, игра, виляние хвостом). Для этого используем **Object.assign()\***

**Object.assign()** - позволяет добавлять свойства к целевому объекту. В примере это **Dog.prototype**

```js
class Dog {
	constructor(name) {
		this.name = name;
	}
}

const dogFunctionality = {
	bark: () => console.log('Woof!'),
	wagTail: () => console.log('Wagging my tail!'),
	play: () => console.log('Playing!')
};

Object.assign(Dog.prototype, dogFunctionality);

const pet1 = new Dog('Daisy');

pet1.name; // Daisy
pet1.bark(); // Woof!
pet1.play(); // Playing!
```

> Каждый новый экземпляр _Dog_ будет иметь доступ к свойствам _dogFunctionality_, поскольку они добавлены к _Dog_ прототипу!

**Пример 2**

Хотя мы можем добавлять функциональность с помощью миксинов без наследования, **сами миксины могут использовать наследование**!

Дополним миксин функциональностью animalFunctionality

```js
class Dog {
	constructor(name) {
		this.name = name;
	}
}

const animalFunctionality = {
	walk: () => console.log('Walking!'),
	sleep: () => console.log('Sleeping!')
};

const dogFunctionality = {
	__proto__: animalFunctionality,
	bark: () => console.log('Woof!'),
	wagTail: () => console.log('Wagging my tail!'),
	play: () => console.log('Playing!'),
	walk() {
		super.walk();
	},
	sleep() {
		super.sleep();
	}
};

Object.assign(Dog.prototype, dogFunctionality);

const pet1 = new Dog('Daisy');

console.log(pet1.name);
pet1.bark();
pet1.play();
pet1.walk();
pet1.sleep();
```

## Применение в React

До появления классов ES6 миксины часто использовались для расширения функциональности компонентов React.

> Команда React не рекомендует использовать миксины, поскольку они легко усложняют компонент, затрудняя его поддержку и повторное использование.

> Команда React рекомендовала использовать компоненты более высокого порядка , которые теперь часто можно заменить хуками.

<hr>
