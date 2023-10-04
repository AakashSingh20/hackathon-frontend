// ForumPage.js
import React, { useState } from 'react';
import Card from './Card';
import CardModal from './CardModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


const ForumPage = () => {
    const [questions, setQuestions] = useState([]);
    const [questionModalShow, setQuestionModalShow] = useState(false);
    const [answerModalShow, setAnswerModalShow] = useState(false);
    const [currentQuestionId, setCurrentQuestionId] = useState(null);

    const handleAskQuestion = () => {
        setQuestionModalShow(true);
    };

    const handleAnswerQuestion = (questionId) => {
        setCurrentQuestionId(questionId);
        setAnswerModalShow(true);
    };

    const addQuestion = (question) => {
        setQuestions([...questions, question]);
    };

    const answerQuestion = (answer) => {
        setQuestions((prevQuestions) =>
            prevQuestions.map((q) =>
                q.id === currentQuestionId ? { ...q, answer } : q
            )
        );
        setAnswerModalShow(false);
    };

    return (
        <div >
            <button className="add-button">
                <FontAwesomeIcon icon={faPlus} onClick={handleAskQuestion} />
            </button>
            {questions.map((question) => (
                <Card
                    key={question.id}
                    question={question.question}
                    answer={question.answer}
                    onAnswerClick={() => handleAnswerQuestion(question.id)}
                />
            ))}

            <CardModal
                show={questionModalShow}
                onHide={() => setQuestionModalShow(false)}
                onSave={(question) => {
                    addQuestion({ id: Date.now(), question, answer: '' });
                    setQuestionModalShow(false);
                }}
                title="Ask a Question"
            />

            <CardModal
                show={answerModalShow}
                onHide={() => setAnswerModalShow(false)}
                onSave={(answer) => {
                    answerQuestion(answer);
                }}
                title="Answer the Question"
            />
        </div>

    );
};

export default ForumPage;
