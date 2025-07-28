//Enums (перечисление);

//1. Числовые перечисления
enum Direction {
	Up,
	Down,
	Left,
	Right
}

const move: Direction = Direction.Up;
console.log(move);

//2. Строковые перечисления
enum Color {
	Red = 'RED',
	Blue = 'BLUE',
	Green = 'GREEN'
}

const favoriteColor: Color = Color.Green;
console.log(favoriteColor);

//3. Смешанные типы
enum MixedEnum {
	No = 1,
	Yes = 'YES'
}

console.log(Direction[0]);
console.log(Direction[Direction.Up]);
