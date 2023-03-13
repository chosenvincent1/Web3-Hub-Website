import React, { useState } from 'react';
import '../Styles/Faq.css';
import {
    FaPlus,
} from 'react-icons/fa';

import faq from '../Images/faq-image.svg';
import questions from '../data.json';


const Faq = ()=> {
    

    const [click, setClick] = useState(false);
    const [clickQuestion, setClickQuestion] = useState(null);

    function handleClick(questionID) {
        setClick(!click)
        setClickQuestion(questionID)
        // console.log(questionID)
    }

    const questionStyle = {
        marginBottom: '0px',
        borderBottomLeftRadius: '0px',
        borderBottomRightRadius: '0px',
    }

    return (
        <div className='faq'>
            <h1 className='faq-heading'>Frequently Asked Question</h1>
            <div className='question-answer-section'>
                <div className='image-container'>
                    <img src={faq} alt='Man Standing' className='faq-image' />
                </div>
                <div className='question-answer-container'>
                        {questions.questionAnswer.map((item) => (
                            <div className='each-question-container' key={item.id}>
                                <div
                                    className="question"
                                    style={clickQuestion === item.id && click ? questionStyle : null}
                                >
                                    <p>{item.question}</p>
                                    <FaPlus className="add-icon" onClick={()=> handleClick(item.id)} />    
                                </div>
                                {clickQuestion === item.id && click && (
                                    <div className="answer">
                                    <p>{item.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                </div>
            </div>
        </div>
    ) 
}

export default Faq;