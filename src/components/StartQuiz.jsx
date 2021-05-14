import React from 'react';
import '../App.css';
import mainImg from '../homepage-img.png';

export default function StartQuiz(props) {
	return (
		<div className='start_game'>
			<h1>
				Don <br />
				Quizote
			</h1>
			{/* <img src={mainImg} alt='mainImg' /> */}
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
				<input type='submit' value='Start Game' onClick={() => props.setQuizState('started')} />
			</form>
		</div>
	);
}
