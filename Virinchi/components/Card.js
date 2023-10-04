import React from 'react'
import './cards.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Card = (props) => {
    let { questions, answers, title, source, employeeQuestion, hrAnswer, onEditQuestionClick, onEditAnswerClick } = props
    return (
        <>
            {/* HR to answer the question */}
            <div className="container">
                <div className="col-md-4">
                    <div className="my-3">
                        <div className='my-3'>
                            <div className="card" >
                                <div className="card-body">
                                    <h5 className="card-title">{employeeQuestion}</h5>
                                    <p className="card-text">{hrAnswer} </p>
                                    <button className="add-button">
                                        <FontAwesomeIcon icon={faPlus}  onClick={onEditAnswerClick}  />
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Employee to Post questions */}
            <div className="plus-symbol">
                <FontAwesomeIcon icon={faPlus} onClick={onEditQuestionClick}  />
            </div>
        </>
    )
}

export default Card