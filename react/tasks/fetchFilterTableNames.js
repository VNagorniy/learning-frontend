import { useEffect, useState } from 'react';
import './styles.css';

const str = 'https://jsonplaceholder.typicode.com/users';

const App = () => {
	const [items, setItems] = useState([]);
	const [filter, setFilter] = useState('All');

	useEffect(() => {
		fetch(str)
			.then((res) => res.json())
			.then((data) => setItems(data));
	}, []);

	const filters = ['All', ...new Set(items.map((item) => item.address.city))];

	const filterItems = filter === 'All' ? items : items.filter((user) => user.address.city === filter);

	return (
		<div>
			<select value={filter} onChange={(e) => setFilter(e.target.value)}>
				{filters.map((item) => (
					<option key={item} value={item}>
						{item}
					</option>
				))}
			</select>
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Имя</th>
						<th>Email</th>
						<th>Город</th>
					</tr>
				</thead>
				<tbody>
					{filterItems.map((user) => (
						<tr key={user.id}>
							<td>{user.id}</td>
							<td>{user.name}</td>
							<td>{user.email}</td>
							<td>{user.address.city}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default App;

// Стили
// table {
//   width: 100%;
//   border-collapse: collapse;
//   margin-top: 20px;
//   font-family: Arial, sans-serif;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
// }

// th,
// td {
//   border: 1px solid #ddd;
//   padding: 12px 16px;
//   text-align: left;
// }

// thead {
//   background-color: #f4f4f4;
// }

// tbody tr:nth-child(even) {
//   background-color: #fafafa;
// }

// tbody tr:hover {
//   background-color: #f1f1f1;
//   cursor: pointer;
// }

// select {
//   margin: 20px 0;
//   padding: 8px 12px;
//   font-size: 16px;
//   border-radius: 4px;
//   border: 1px solid #ccc;
// }
