import { useState } from 'react';

function useArray<T>(initial: T[] = []) {
	const [value, setValue] = useState<T[]>(initial);

	const push = (element: T) => {
		setValue((prev) => [...prev, element]);
	};

	const removeByIndex = (index: number) => {
		setValue((prev) => prev.filter((_, i) => i !== index));
	};

	return { value, push, removeByIndex };
}

export default function App() {
	const { value, push, removeByIndex } = useArray<number>([1, 2, 3]);

	return (
		<div>
			<ul>
				{value.map((item, index) => (
					<li key={index}>
						{item}
						<button onClick={() => removeByIndex(index)}>Удалить</button>
					</li>
				))}
			</ul>
			<button onClick={() => push(value.length + 1)}>Добавить</button>
		</div>
	);
}
