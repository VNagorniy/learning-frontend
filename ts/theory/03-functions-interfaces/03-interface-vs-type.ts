// Интерфейсы и типы

// Интерфейс расширяется друг от друга или от классов, предпочтительнее для описания объекта
interface IUserInterface {
	name: string;
	age: number;
	email: string;
	//  greet(): string;
	greet: () => string;
}

const user: IUserInterface = {
	name: 'Ira',
	age: 33,
	email: 'ira@mail.ru',
	greet(): string {
		return `Hello ${this.name}`;
	}
};

console.log(user.greet());

// ------------------------
// Типы могут объединяться с &, могут описывать пересечения, объединения, примитивы

type UserType = {
	name: string;
	age: number;
	email: string;
	//  greet(): string;
	greet: () => string;
};

const user2: UserType = {
	name: 'Igor',
	age: 39,
	email: 'daa@mail.ru',
	greet(): string {
		return `Hello ${this.name}`;
	}
};

console.log(user2.greet());

//-------------------
interface IExtenderUserInterface extends IUserInterface {
	role: string;
}

const user3: IExtenderUserInterface = {
	role: 'admin',
	name: 'Vova',
	age: 0,
	email: 'vova@mail.ru',
	greet(): string {
		return `Hello ${this.name}`;
	}
};

console.log(user3.greet());
