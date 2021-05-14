import React from 'react';
import '../App.css';

export default function Timer({ timeLeft, setTimeLeft, setQuizState }) {
	React.useEffect(() => {
		//  if there is not timeLeft then game over?
		if (timeLeft <= 0) setQuizState('gameOver');
		// else create set interval function for every second
		const startInterval = setInterval(() => {
			setTimeLeft(timeLeft - 1);
		}, 1000);
		return () => clearInterval(startInterval);
	}, [timeLeft, setQuizState, setTimeLeft]);

	return (
		<div className='progress-bar'>
			<h1>{timeLeft}</h1>
			<label htmlFor='game'>progress:</label>
			<progress id='game' value={timeLeft} max='30'>
				{' '}
				{timeLeft}{' '}
			</progress>
		</div>
	);
}
