import React from 'react';
import { Link } from 'react-router-dom';

const QuestionsList = ({ questions }) => {
  const renderQuestions = questions.map(question => 
    <Link style={{ marginRight: '12px' }} key={question.id} to={`/questions/${question.id}`}>{question.id}</Link>
  );
  
  return (
    <div>
      {renderQuestions}
    </div>
  );
};

export default QuestionsList;