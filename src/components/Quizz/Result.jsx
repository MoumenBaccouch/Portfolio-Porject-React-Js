// Result.js
import React from 'react';

const Result = ({ score, totalQuestions }) => {
  return (
    <div className="result-container">
      <h2 className="result-title">Quiz Result</h2>
      <p className="result-text">
        You scored {score} out of {totalQuestions}
      </p>
    </div>
  );
};

export default Result;
