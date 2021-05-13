import React from 'react';

function QuizData() {
	const [quizData, setQuiz] = React.useState('');

	React.useEffect(() => {
		fetch('https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=boolean')
			.then((res) => res.json())
			.then((data) => {
				setQuiz(data), console.log(data);
			});
	}, []);
	if (!quizData) {
		return <div>Loading...</div>;
	} else {
		return (
			<div>
				<p>{quizData.results[0].question}</p>
				<p>{quizData.results[0].correct_answer}</p>
				<p>{quizData.results[0].incorrect_answers}</p>
			</div>
		);
	}
}
export default QuizData;
