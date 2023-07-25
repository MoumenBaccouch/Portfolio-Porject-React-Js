// QuizApp.js
import React, { useState } from 'react';
import './Quiz.css';
import Question from './Question';
import Result from './Result';

const QuizApp = () => {
  // Sample quiz questions data
  const [questions] = useState([
    {
      question: 'What is the capital of France?',
      options: ['Berlin', 'London', 'Paris', 'Madrid'],
      correctOption: 'Paris',
    },
    {
        question: 'What is the largest planet in our solar system?',
        options: ['Jupiter', 'Saturn', 'Mars', 'Earth'],
        correctOption: 'Jupiter',
      },
      {
        question: 'Who painted the Mona Lisa?',
        options: ['Vincent van Gogh', 'Pablo Picasso', 'Leonardo da Vinci', 'Rembrandt'],
        correctOption: 'Leonardo da Vinci',
      },
      {
        question: 'Which country is known as the Land of the Rising Sun?',
        options: ['China', 'Japan', 'South Korea', 'Thailand'],
        correctOption: 'Japan',
      },
      {
        question: 'What is the chemical symbol for water?',
        options: ['O', 'H2O', 'W', 'HO'],
        correctOption: 'H2O',
      },
      {
        question: 'Who is the author of the Harry Potter book series?',
        options: ['J.K. Rowling', 'Stephen King', 'George R.R. Martin', 'Dan Brown'],
        correctOption: 'J.K. Rowling',
      },
      {
        question: 'What is the currency of Japan?',
        options: ['Yen', 'Euro', 'Dollar', 'Pound'],
        correctOption: 'Yen',
      },
      {
        question: 'Which animal is known as the "King of the Jungle"?',
        options: ['Lion', 'Tiger', 'Elephant', 'Giraffe'],
        correctOption: 'Lion',
      },
      {
        question: 'Which planet is closest to the Sun?',
        options: ['Earth', 'Venus', 'Mercury', 'Mars'],
        correctOption: 'Mercury',
      },
      {
        question: 'Who wrote the play "Romeo and Juliet"?',
        options: ['William Shakespeare', 'Jane Austen', 'Charles Dickens', 'Mark Twain'],
        correctOption: 'William Shakespeare',
      },
  ]);

  const [indexNumber, setIndexNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[indexNumber].correctOption) {
      setScore((prevScore) => prevScore + 1);
    }

    if (indexNumber + 1 === questions.length) {
      setShowResult(true);
    } else {
      setIndexNumber((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div className="quiz-app">
      <h1 className="app-title">Quiz App</h1>
      {!showResult ? (
        <Question
          question={questions[indexNumber].question}
          options={questions[indexNumber].options}
          handleAnswer={handleAnswer}
        />
      ) : (
        <Result score={score} totalQuestions={questions.length} />
      )}
    </div>
  );
};

export default QuizApp;
