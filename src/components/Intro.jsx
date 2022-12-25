import React from "react";
import myImage from '../assets/1.svg'

export default function Intro(props) {
  return (
    <div className="intro">
      <img src={myImage} alt='myImage' />
      <h1> Quizzical </h1>
      <p> Try to answer 5 questions </p>
      <div className="intro-button" onClick={props.startQuiz}>
        <a href="#"> Start quiz</a>
      </div>
    </div>
  );
}
