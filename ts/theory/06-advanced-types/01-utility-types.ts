{
	// Utility Types (Утилитарные типы)
	/* 
Utility Types в TypeScript предоставляют полезные инструменты для работы с типами.
Они позволяют изменять и комбинировать существующие типы для создания новых типов.
*/
	// 1. Partial<Type>
	// Создает новый тип, в котором все свойства Type являются необязательными.
	interface IUser {
		id: number;
		name: string;
		age: number;
	}

	const particalUser: Partial<IUser> = {};

	// 2. Readonly<Type>
	const user: Readonly<IUser> = {
		id: 1,
		name: 'Irina',
		age: 40
	};

	// user.id = 2;

	// 3. Record<Keys, Type>
	// Создает объектный тип с набором свойств Keys, которые имеют тип Type.
	type Role = 'admin' | 'user' | 'guest';

	const rolePermission: Record<Role, string[]> = {
		admin: ['read', 'write', 'delete'],
		user: ['read', 'write'],
		guest: ['read']
	};

	// 4. Pick<Type, Keys>
	// Создает новый тип, выбирая набор свойств Keys из Type.
	type UserPreview = Pick<IUser, 'id' | 'name'>;
	// interface IUserPreview extends Pick<IUser, 'id' | 'name'> {}

	const preview: UserPreview = {
		id: 23,
		name: 'Pet'
	};

	// 5. Omit<Type, Keys>
	// Создает новый тип, исключая набор свойств Keys из Type.
	// type UserWithoutAge = Omit<IUser, 'age'>;
	interface IUserWithoutAge extends Omit<IUser, 'age'> {}

	const userWithoutAge: IUserWithoutAge = {
		id: 1,
		name: 'Bob'
		// age: 30,
	};
}
