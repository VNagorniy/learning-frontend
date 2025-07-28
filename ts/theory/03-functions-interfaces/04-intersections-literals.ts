{
	// Типы пересечения

	interface IName {
		name: string;
	}

	interface IAge {
		age: number;
	}

	type Person = IName & IAge;

	const person: Person = {
		name: 'Vova',
		age: 27
	};

	console.log(person);

	//--------------------------
	interface IAdress {
		street: string;
		city: string;
	}

	const user = {
		id: 1,
		name: 'Вася'
	};

	type UserWithAddress = typeof user & IAdress;

	const userWithAddress: UserWithAddress = {
		...user,
		street: 'Zorge',
		city: 'Rostov'
	};
	console.log(userWithAddress);

	//---------Литеральные типы (позволяют указать точные значения какие может иметь тип)

	type Status = 'success' | 'error' | 'pending';
	type Result = 0 | 1 | 2;

	const _status: Status = 'success';
	const _result: Result = 2;

	console.log(_status, _result);
}
