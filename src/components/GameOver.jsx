import React from 'react';
export default function GameOver(props) {
	return (
		<div className='game_over'>
			<h1>GAME OVER!</h1>
			<p>Your score:</p>
			<p>{props.score}</p>
		</div>
	);
}
