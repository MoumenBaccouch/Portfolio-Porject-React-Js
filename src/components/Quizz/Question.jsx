// Question.js
import React from 'react';

const Question = ({ question, options, handleAnswer }) => {
  return (
    <div className="question-container">
      <h2 className="question">{question}</h2>
      <div className="options-container">
        {options.map((option) => (
          <button
            key={option}
            className="option-btn"
            onClick={() => handleAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
