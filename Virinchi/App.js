import React, { useState } from 'react';
import './App.css';
import Card from './components/Card';
import CardModal from './components/CardModal';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [employeeQuestion, setEmployeeQuestion] = useState('Employee Question');
  const [hrAnswer, setHrAnswer] = useState('HR Answer');
  const [questionModalShow, setQuestionModalShow] = useState(false);
  const [answerModalShow, setAnswerModalShow] = useState(false);

  const handleQuestionSave = (newQuestion) => {
    setEmployeeQuestion(newQuestion);
    setQuestionModalShow(false);
  };

  const handleAnswerSave = (newAnswer) => {
    setHrAnswer(newAnswer);
    setAnswerModalShow(false);
  };


  return (
    <div className="container">
<Card
        employeeQuestion={employeeQuestion}
        hrAnswer={hrAnswer}
        onEditQuestionClick={() => setQuestionModalShow(true)}
        onEditAnswerClick={() => setAnswerModalShow(true)}
      />

      {/* Modal for editing employeeQuestion */}
      <CardModal
        show={questionModalShow}
        onHide={() => setQuestionModalShow(false)}
        onSave={handleQuestionSave}
        title={employeeQuestion}
        setTitle={setEmployeeQuestion}
        label="Edit Employee Question"
      />

      {/* Modal for editing hrAnswer */}
      <CardModal
        show={answerModalShow}
        onHide={() => setAnswerModalShow(false)}
        onSave={handleAnswerSave}
        title={hrAnswer}
        setTitle={setHrAnswer}
        label="Edit HR Answer"
      />
    </div>
  );
}

export default App;
