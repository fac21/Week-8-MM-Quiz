import React, { useState } from 'react';
import './App.css';
import QuizData from './components/QuizData.jsx';
import StartQuiz from './components/StartQuiz';
import GameOver from './components/GameOver';
// import from ""

function App() {
	const [username, setUser] = React.useState('');
	const [quizState, setQuizState] = React.useState('notStarted');
	const [score, setScore] = React.useState(0);

	return (
		<div className='App'>
			<div>
				{quizState === 'notStarted' ? (
					<StartQuiz username={username} setUser={setUser} setQuizState={setQuizState} />
				) : quizState === 'started' ? (
					<QuizData username={username} setQuizState={setQuizState} score={score} setScore={setScore} />
				) : (
					<GameOver setQuizState={setQuizState} score={score} />
				)}
			</div>
		</div>
	);
}

export default App;
