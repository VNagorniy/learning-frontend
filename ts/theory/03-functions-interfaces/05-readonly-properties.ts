{
	// Readonly

	interface IUserReadonly {
		readonly id: number;
		name: string;
		readonly birthday: Date;
	}

	const user: IUserReadonly = {
		id: 1,
		name: 'Ira',
		birthday: new Date('1990-02-02')
	};

	// user.id = 2
	// user.name = 'Ina';

	const numbers: readonly number[] = [1, 2, 3, 4, 5];
	// numbers.push(2);

	const point: readonly [number, string] = [12, 'asd'];

	//---------------------
	class Article {
		readonly id: number;
		title: string;

		constructor(id: number, title: string) {
			this.id = id;
			this.title = title;
		}

		changeId(newId: number): void {
			// this.id = newId;
		}
	}
}
