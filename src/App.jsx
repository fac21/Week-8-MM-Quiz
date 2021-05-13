import React, { useState } from 'react';
import './App.css';
import QuizData from './components/QuizData.jsx';
import StartQuiz from './components/StartQuiz';

function App() {
	const [username, setUser] = React.useState('');
	const [quizState, setQuizState] = React.useState('notStarted');

	return (
		<div className='App'>
			<div>
				{quizState === 'notStarted' ? (
					<StartQuiz username={username} setUser={setUser} setQuizState={setQuizState} />
				) : (
					<p>Hi again'</p>
				)}
			</div>
		</div>
	);
}

export default App;
