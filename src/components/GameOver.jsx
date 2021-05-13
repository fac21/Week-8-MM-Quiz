import React from 'react';
export default function GameOver(props) {
	return (
		<div class='game__over'>
			<h1>GAME OVER!</h1>
			<p>Your score:</p>
			<p>{props.score}</p>
		</div>
	);
}
