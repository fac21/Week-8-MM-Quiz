import React from 'react';
import Timer from './Timer';
function QuizData(props) {
	const [quizData, setQuiz] = React.useState('');
	const [index, setIndex] = React.useState(0);
	const [timeLeft, setTimeLeft] = React.useState(20);
	const audioObj = new Audio('./correct.mp3');

	React.useEffect(() => {
		fetch('https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=boolean')
			.then((res) => res.json())
			.then((data) => setQuiz(data))
			.catch((error) => console.error(error))

	}, []);

	//if fetch is pending
	if (!quizData) {
		return <div>Loading...</div>;
	}

	//after resolved fetch
	const currentQuestion = quizData.results[index];
	const question = currentQuestion.question.replace(/&quot;/g, '"').replace(/&#039;/g, "'");
	const correct_answer = currentQuestion.correct_answer;


	function checkAnswer(event) {
		if (event.target.textContent === correct_answer) {
			audioObj;
			props.setScore(props.score + 1);
		} 
	}

	return (
		<main className='quiz'>
			<Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} setQuizState={props.setQuizState} />
			{index === 0 ? <p>Hi {props.username}!</p> : null}
			{index < 9 ? <h2>{question}</h2> : props.setQuizState('gameOver')}

			<button
				onClick={(event) => {
					checkAnswer(event);
					setIndex(index + 1);
				}}>
				True
			</button>
			<button
				onClick={(event) => {
					checkAnswer(event);
					setIndex(index + 1);
				}}>
				False
			</button>

		
		</main>
	);
}

export default QuizData;
