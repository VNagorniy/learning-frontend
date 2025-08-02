import { useState } from 'react';

export default function App() {
	const [state, setState] = useState([]);
	const [inputState, setInputState] = useState('');

	function onAdd() {
		setState((prevState) => [...prevState, inputState]);
		setInputState('');
	}

	function onChange({ target }) {
		setInputState(target.value);
	}

	function onDelete(name) {
		setState((prevState) => prevState.filter((item) => item !== name));
	}

	function onSubmit(e) {
		e.preventDefault();
		const formData = new FormData(e.target);
		console.log(e.target);
		console.log();
		console.log(formData);
	}

	return (
		<div className="App">
			<input type="text" onChange={onChange} value={inputState} />
			<button onClick={onAdd}>Добавить поле</button>
			<form action="" onSubmit={onSubmit}>
				<ul>
					{state.map((item) => (
						<li key={item}>
							<label htmlFor={item}>{item}</label>
							<input type="text" id={item} name={item} />
							<button type="button" onClick={() => onDelete(item)}>
								Delete
							</button>
						</li>
					))}
				</ul>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}
