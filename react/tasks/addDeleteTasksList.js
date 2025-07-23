import { useEffect, useState } from 'react';
import './styles.css';

const App = () => {
	const [tasks, setTasks] = useState([]);
	const [newTask, setNewTask] = useState('');

	useEffect(() => {
		fetch('/api/tasks')
			.then((response) => response.json())
			.then((data) => setTasks(data.tasks))
			.catch((error) => console.log('Error fetching tasks'));
	}, []);

	const addTask = () => {
		if (!newTask) return;
		setTasks([...tasks, { id: tasks.length + 1, name: newTask }]);
		setNewTask('');
	};

	const deleteTask = (id) => {
		const filteredTasks = tasks.filter((task) => id !== task.id);
		setTasks(filteredTasks);
	};

	return (
		<div>
			<h1>Task List</h1>
			<ul>
				{tasks.map((task) => (
					<>
						<li key={task.id}>{task.name}</li>
						<button onClick={() => deleteTask(task.id)}>X</button>
					</>
				))}
			</ul>
			<input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
			<button onClick={addTask}>Add task</button>
		</div>
	);
};

export default App;
