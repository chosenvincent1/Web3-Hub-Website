import React from 'react';
import '../Styles/Faq.css';
import {
    FaPlus,
} from 'react-icons/fa';

const Faq = ()=> {
    
    console.log(window.innerWidth)

    return (
        <div className='faq'>
            <h1 className='faq-heading'>Frequently Asked Question</h1>
            <div className='question-answer-section'>
                <div className='image-container'>
                    <img src='./Images/faq-image.svg' alt='Man Standing' className='faq-image' />
                </div>
                <div className='question-answer-container'>
                    <div className='each-question-container'>
                        <div className='question' >
                            <p>What is Web3 Hub?</p>
                            <FaPlus className='add-icon' />
                        </div>
                        {/* <div className='answer'>
                            <p>This is a Blockchain Company</p>
                        </div>  */}
                    </div>
                    <div className='question-answer-container'>
                        <div className='question'>
                            <p>What is Web3 Hub?</p>
                            <FaPlus className='add-icon' />
                        </div>
                        {/* <div className='answer'>
                            <p>This is a Blockchain Company</p>
                        </div>  */}
                    </div>
                    <div className='question-answer-container'>
                        <div className='question'>
                            <p>What is Web3 Hub?</p>
                            <FaPlus className='add-icon' />
                        </div>
                        {/* <div className='answer'>
                            <p>This is a Blockchain Company</p>
                        </div> */}
                    </div>
                    <div className='question-answer-container'>
                        <div className='question'>
                            <p>What is Web3 Hub?</p>
                            <FaPlus className='add-icon' />
                        </div>
                        {/* <div className='answer'>
                            <p>This is a Blockchain Company</p>
                        </div> */}
                    </div>
                    <div className='question-answer-container'>
                        <div className='question'>
                            <p>What is Web3 Hub?</p>
                            <FaPlus className='add-icon' />
                        </div>
                        {/* <div className='answer'>
                            <p>This is a Blockchain Company</p>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default Faq;