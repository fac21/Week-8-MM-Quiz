import React from 'react';
import Timer from "./Timer";
function QuizData(props) {
	const [quizData, setQuiz] = React.useState('');
	const [index, setIndex] = React.useState(0);
    const [timeLeft, setTimeLeft] = React.useState(20);

	React.useEffect(() => {
		fetch('https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=boolean')
			.then((res) => res.json())
			.then((data) => setQuiz(data));
				// setQuiz(data), console.log(data);
	}, []);


//if fetch is pending 
	if (!quizData) {
		return <div>Loading...</div>;
	} 

//after resolved fetch
const currentQuestion = quizData.results[index];
const question = currentQuestion.question;
const correct_answer = currentQuestion.correct_answer;
const incorrect_answers = currentQuestion.incorrect_answers;
const choices = [correct_answer, ...incorrect_answers];


var shuffledChoices = choices.sort(() => Math.random() - 0.5);

function checkAnswer(event){
	if (event.target.textContent === correct_answer) {
		setTimeLeft(timeLeft + 5);
		// props.setScore(props.score + 1)
		
	}else{
		setTimeLeft(timeLeft - 2);
	}
}

return (
	<main className="quiz">
		<Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} setQuizState={props.setQuizState}/>
		{ index === 0 ? <h1>Hi {props.username}!</h1> : null }
		{ index < 9 ? <h2>{question}</h2> : 
		props.setQuizState("gameOver")
		}


		<button onClick ={(event) =>{
				checkAnswer(event)
				setIndex(index + 1)
			}
			
			} >{choices[0]}</button>
		<button onClick ={(event) =>{
				checkAnswer(event)
				setIndex(index + 1)
			}
			
			}>{choices[1]}</button>
		
		{/* {
		
		
		shuffledChoices.map(choice => (

			<button key={index} onClick ={(event) =>{
				checkAnswer(event)
				setIndex(index + 1)
			}
			
			}>{choice[0]}</button>
		))
		
		} */}
		 {/* <h2><span>SCORE:{props.score}</span></h2> */}
	</main>
)

} 

export default QuizData;
