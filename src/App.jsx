import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import myImage from './assets/1.svg'
import './App.css'
import Intro from './components/Intro'
import Quiz from './components/Quiz'
import { nanoid } from 'nanoid'

function App() {
  const [showQuiz, setShowQuiz] = useState(false)
  const [questions, setQuestions] = useState([])
  const [newGame, setNewGame] = useState(false)

  React.useEffect(() => {
    console.log('useEffect')
    const questionsArray = []
    fetch('https://opentdb.com/api.php?amount=5&category=11&difficulty=easy&type=multiple&encode=url3986')
      .then((response) => response.json())
      .then((data) => {
        data.results.forEach((question) => {
          questionsArray.push({
            id: nanoid(),
            question: question.question,
            correct_answer: question.correct_answer,
            incorrect_answers: question.incorrect_answers,
            answers: [question.correct_answer, ...question.incorrect_answers].sort(),
            answered: false,
            correct: false,
          })
          setQuestions(questionsArray)
        })
      })
  }, [newGame])

  function answered(questionId, userAnswer) {
    setQuestions(prevQuestions => ( prevQuestions.map((q) => {
      if (q.id === questionId) {
        q.answered = true
        q.correct = q.correct_answer === userAnswer
      }
      return q
    } )))
  }
  const startQuiz = () => {
    setShowQuiz(true)
  }

  function startNew() {
    setShowQuiz(false)
    setQuestions([])
    setNewGame(!newGame)
  }


  return (
    <div className='main'>
      <img src={myImage} alt='myImage' />
      {showQuiz === false && <Intro startQuiz={startQuiz} />}
      {showQuiz && <Quiz questions={questions} startNew={startNew} answered={answered}/>
      }
    </div>
  )
}

export default App
