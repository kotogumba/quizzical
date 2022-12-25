import React from "react";
import Answer from "./Answer";

export default function Question(props) {
  const [selectedAnswer, setSelectedAnswer] = React.useState(null)

  const answersElements = props.question.answers.map((answer) => (
    <Answer
      key={answer}
      answer={answer}
      correctAnswer={props.question.correct_answer}
      selectedAnswer={selectedAnswer}
      setSelectedAnswer={setSelectedAnswer}
      gameOver={props.gameOver}
      questionId={props.question.id}
      answered={props.answered}
    />
  ))

  return (
    <div className="question">
      <h2>{decodeURIComponent(props.question.question)}</h2>
      <div className="answers">
        {answersElements}
      </div>
    </div>
  );
}
