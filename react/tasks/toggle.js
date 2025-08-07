import { useState } from 'react';
import './styles.css';

export default function Toggle() {
	const [isOn, setIsOn] = useState(false);

	const handleChange = (e) => {
		setIsOn(e.target.checked);
	};

	return (
		<div className="toggle-container">
			<label className="toggle-switch">
				<input type="checkbox" checked={isOn} onChange={handleChange} />
				<span className="slider" />
			</label>
			<div className="toggle-status">{isOn ? 'Toggle включен' : 'Toggle выключен'}</div>
		</div>
	);
}

//Стили
// .App {
//   font-family: sans-serif;
//   text-align: center;
// }

// .toggle-container {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 16px;
//   padding: 16px;
// }

// /* Скрываем стандартный checkbox */
// .toggle-switch input {
//   opacity: 0;
//   width: 0;
//   height: 0;
//   position: absolute;
// }

// /* Контейнер овала */
// .toggle-switch {
//   position: relative;
//   display: inline-block;
//   width: 60px;
//   height: 32px;
// }

// /* Овал-переключатель */
// .slider {
//   position: absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background-color: #ccc;
//   border-radius: 999px;
//   transition: background-color 0.3s ease;
//   cursor: pointer;
// }

// /* Кружок внутри овала */
// .slider::before {
//   content: "";
//   position: absolute;
//   width: 26px;
//   height: 26px;
//   left: 3px;
//   top: 3px;
//   background-color: white;
//   border-radius: 50%;
//   transition: transform 0.3s ease;
//   box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
// }

// /* Когда активен — зелёный фон и сдвиг круга */
// .toggle-switch input:checked + .slider {
//   background-color: #22c55e;
// }

// .toggle-switch input:checked + .slider::before {
//   transform: translateX(28px);
// }

// .toggle-status {
//   font-size: 18px;
// }
