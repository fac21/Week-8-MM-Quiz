import React from "react"

export default function Timer({timeLeft, setTimeLeft, setQuizState}){
    React.useEffect(() => {
        //  if there is not timeLeft then game over?
        if (  timeLeft <= 0)   setGameState("gameOver");
        // else create set interval function for every second
        const startInterval = setInterval(() => {
                  setTimeLeft(timeLeft - 1)
            }, 1000);
        return () => clearInterval(startInterval)
    }, [timeLeft, setGameState, setTimeLeft])

    return (
   
        <div>
            <h1>{timeLeft}</h1>
             <label htmlFor="game">progress:</label>
             <progress id="game" value={  timeLeft} max="30"> {timeLeft} </progress>
       
        </div>
        
    )
}