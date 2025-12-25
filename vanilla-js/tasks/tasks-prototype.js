// Дан сложный объект с множеством вложенных переменных.
// Необходимо создать метод-прототип, который по заданному
// вложенному пути возвращает значение или undefined.

const obj = {
	person: {
		name: 'joe',
		history: {
			hometown: 'bratislava',
			bio: {
				funFact: 'I like fishing.'
			}
		}
	}
};

Object.prototype.hash = function (path) {
	if (!path) return undefined;

	const keys = path.split('.');
	let current = this;

	for (let i = 0; i < keys.length; i++) {
		const key = keys[i];

		if (current !== null && typeof current === 'object' && key in current) {
			current = current[key];
		} else {
			return undefined;
		}
	}

	return current;
};

console.log(obj.hash('person.name')); // "joe"
console.log(obj.hash('person.history.bio')); // { funFact: "I like fishing." }
console.log(obj.hash('person.history.homeStreet')); // undefined
console.log(obj.hash('person.animal.pet.needNoseAntEater')); // undefined

//--------------------------------------------------------------------------------------------------
