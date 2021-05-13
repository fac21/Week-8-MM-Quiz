import React from 'react';

function QuizData() {
	const [quizData, setQuiz] = React.useState('');

	React.useEffect(() => {
		fetch('https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple')
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
				<p>{quizData.results}</p>
			</div>
		);
	}
}
export default QuizData;

// const [profileData, setProfileData] = React.useState();
// const gitUrl = 'https://api.github.com/users/';

// React.useEffect(() => {
//     fetch(gitUrl + props.username)
//         .then((res) => res.json())
//         .then((data) => {
//             setProfileData(data), console.log(data);
//         });
// }, [props.username]);
// if (!profileData) {
//     return <div>Loading...</div>;
// } else {
//     return (
//         <div>
//             <p>{profileData.login}</p>
//             <img src={profileData.avatar_url}></img>
//         </div>
//     );
