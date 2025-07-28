{
	//Generic - универсальный способ писать код, который работает с разными типами.

	interface IBox<T> {
		value: T;
	}

	const numberBox: IBox<number> = { value: 123 };
	const stringBox: IBox<string> = { value: 'TypeScript' };

	// =============================
	type Pair<T, U> = {
		first: T;
		second: U;
	};

	const pair: Pair<string, number> = {
		first: 'age',
		second: 30
	};
}
