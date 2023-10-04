import React from 'react'
import './cards.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Card = (props) => {
    let {question, answer, onAnswerClick } = props
    return (
        <>

    <div className="container">
                <div className="col-md-4">
                    <div className="my-3">
                        <div className='my-3'>
                            <div className="card" >
                                <div className="card-body">
                                    <h5 className="card-title">{question}</h5>
                                    <p className="card-text">{answer} </p>
                                    <button className="add-button">
                                        <FontAwesomeIcon icon={faPlus}  onClick={onAnswerClick}  />
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Card