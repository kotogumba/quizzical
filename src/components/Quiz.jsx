import React from "react";
import { nanoid } from 'nanoid'
import Question from "./Question";
import Confetti from 'react-confetti'

export default function Quiz(props) {
  const [gameOver, setGameOver] = React.useState(false)

  let totalAnswerd = props.questions.filter((question) => question.answered).length
  let totalScore = props.questions.filter((question) => question.correct).length

  function checkAnswers() {
    console.log('Check answers')
    setGameOver(true)
  }


  const questionsElements = props.questions.map((question) => (
    <Question key={question.id} question={question} gameOver={gameOver} answered={props.answered}/>
  ))


  return (
    <div className="quiz">
      {questionsElements}
      {gameOver ?
      <div className="results">
        <Confetti />
        <h2>Your score: {totalScore}/5</h2>
        <div className="play-again-button">
          <a onClick={() => props.startNew()}> Play Again</a>
        </div>
      </div> :
      totalAnswerd === props.questions.length &&
      <div className="check-answers-button">
        <a onClick={checkAnswers}> Check answers</a>
      </div>}

    </div>
  );
}
