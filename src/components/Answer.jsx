import React from "react";

export default function Answer(props) {
  function handleClick() {
    props.setSelectedAnswer(props.answer)
    props.answered(props.questionId, props.answer)
  }
  console.log(props)
  let style = {}
  if (props.gameOver) {
    if (props.answer === props.selectedAnswer && props.selectedAnswer === props.correctAnswer) {
      style = { backgroundColor: '#94D7A2' }
    } else if (props.selectedAnswer === props.answer && props.selectedAnswer !== props.correctAnswer) {
      style = { backgroundColor: '#F8BCBC' }
    } else if (props.answer === props.correctAnswer) {
      style = { backgroundColor: '#94D7A2' }
    }
  } else {
    if (props.selectedAnswer === props.answer) {
      style = { backgroundColor: '#4D5B9E', color: 'white' }
    }
  }

  return (
    <div className="answer"  onClick={handleClick}>
      <a style={style}>{decodeURIComponent(props.answer)}</a>
    </div>
  );
}
