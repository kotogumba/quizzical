import React from "react";

export default function Intro(props) {
  return (
    <div className="intro">
      <h1> Quizzical </h1>
      <p> Try to answer 5 questions </p>
      <div className="intro-button" onClick={props.startQuiz}>
        <a href="#"> Start quiz</a>
      </div>
    </div>
  );
}
