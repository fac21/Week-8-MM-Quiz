import React from 'react';

export default function StartQuiz(props) {
	return (
		<div className='start_game'>
			<h1>Don Quizote!</h1>
			<form>
				<label htmlFor='username'>Enter Username</label>
				<input
					required
					name='username'
					id='username'
					placeholder='Enter your username here...'
					value={props.username}
					onChange={(event) => props.setUser(event.target.value)}
				/>
				<input type='submit' value='Start Game' onClick={() => props.setGameState('started')} />
			</form>
		</div>
	);
}
