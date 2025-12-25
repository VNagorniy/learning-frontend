//Компонент по отсчёту таймера заданного времени в initialTime

import { useEffect, useState } from 'react';

function Timer({ initialTime }) {
	const [time, setTime] = useState(initialTime);

	useEffect(() => {
		if (time === 0) return;

		const intervalId = setInterval(() => {
			setTime((prevTime) => prevTime - 1);
		}, 1000);

		return () => clearInterval(intervalId);
	}, [time]);

	const minutes = String(Math.floor(time / 60)).padStart(2, '0');
	const seconds = String(time % 60).padStart(2, '0');

	const handleReset = () => {
		setTime(initialTime);
	};

	return (
		<div style={styles.container}>
			<div style={styles.timer}>
				{minutes}:{seconds}
			</div>
			<button style={styles.button} onClick={handleReset}>
				Reset
			</button>
		</div>
	);
}

export default Timer;
