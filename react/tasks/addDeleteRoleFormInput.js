import React from 'react';
import { useState } from 'react';

export default function InputBlock() {
	const [rows, setRows] = useState([{ id: 1, name: '', age: '', email: '', role: 'Пользователь' }]);

	const addRow = () => {
		const newRow = {
			id: Date.now(),
			name: '',
			age: '',
			email: '',
			role: 'Пользователь'
		};
		setRows([...rows, newRow]);
	};

	const deleteRow = (id) => {
		setRows(rows.filter((row) => row.id !== id));
	};

	const updateRow = (id, field, value) => {
		setRows(rows.map((row) => (row.id === id ? { ...row, [field]: value } : row)));
	};

	const inputStyle = {
		padding: '4px 8px',
		margin: '0 4px',
		border: '1px solid #ccc'
	};

	const buttonStyle = {
		padding: '4px 8px',
		backgroundColor: '#f0f0f0',
		border: '1px solid #ccc',
		borderRadius: '4px',
		cursor: 'pointer',
		margin: '8px 0'
	};

	const headerStyle = {
		display: 'flex',
		marginBottom: '4px',
		paddingLeft: '8px'
	};

	const headerItemStyle = {
		flex: 1,
		textAlign: 'center'
	};

	return (
		<>
			<div>
				<button onClick={addRow} style={buttonStyle}>
					Добавить строку
				</button>
			</div>

			<div>
				<div style={headerStyle}>
					<div style={headerItemStyle}>Имя</div>
					<div style={headerItemStyle}>Возраст</div>
					<div style={headerItemStyle}>Email</div>
					<div style={headerItemStyle}>Роль</div>
				</div>

				{rows.map((row) => (
					<div key={row.id} style={{ display: 'flex', alignItems: 'center', margin: '4px 0' }}>
						<div>
							<input type="text" placeholder="Имя" value={row.name} onChange={(e) => updateRow(row.id, 'name', e.target.value)} style={inputStyle} />
						</div>
						<div>
							<input type="text" placeholder="Возраст" value={row.age} onChange={(e) => updateRow(row.id, 'age', e.target.value)} style={inputStyle} />
						</div>
						<div>
							<input type="text" placeholder="Email" value={row.email} onChange={(e) => updateRow(row.id, 'email', e.target.value)} style={inputStyle} />
						</div>
						<div>
							<select value={row.role} onChange={(e) => updateRow(row.id, 'role', e.target.value)} style={inputStyle}>
								<option value="Пользователь">Пользователь</option>
								<option value="Админ">Админ</option>
							</select>
						</div>
						<div>
							<button
								onClick={() => deleteRow(row.id)}
								style={{
									border: 'none',
									background: 'none',
									cursor: 'pointer',
									color: 'red'
								}}
							>
								x
							</button>
						</div>
					</div>
				))}
			</div>
		</>
	);
}
