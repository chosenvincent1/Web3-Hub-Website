import React from 'react';
import '../Styles/Faq.css';

const Faq = ()=> {
    return (
        <div className='faq'>
            <h1 className='faq-heading'>Frequently Asked Question</h1>
            <div className='question-answer-section'>
                <img src='./Images/faq-image.svg' alt='Man Standing' className='faq-image' />
                <div>
                    <div className='question-answer-container'>
                        <div className='question'>
                            <h1>What is Web3 Hub?</h1>
                            <h1>+</h1>
                        </div>
                        {/* <div className='answer'>
                            <p>This is a Blockchain Company</p>
                        </div> */}
                    </div>
                    <div className='question-answer-container'>
                        <div className='question'>
                            <h1>What is Web3 Hub?</h1>
                            <h1>+</h1>
                        </div>
                        {/* <div className='answer'>
                            <p>This is a Blockchain Company</p>
                        </div> */}
                    </div>
                    <div className='question-answer-container'>
                        <div className='question'>
                            <h1>What is Web3 Hub?</h1>
                            <h1>+</h1>
                        </div>
                        {/* <div className='answer'>
                            <p>This is a Blockchain Company</p>
                        </div> */}
                    </div>
                    <div className='question-answer-container'>
                        <div className='question'>
                            <h1>What is Web3 Hub?</h1>
                            <h1>+</h1>
                        </div>
                        {/* <div className='answer'>
                            <p>This is a Blockchain Company</p>
                        </div> */}
                    </div>
                    <div className='question-answer-container'>
                        <div className='question'>
                            <h1>What is Web3 Hub?</h1>
                            <h1>+</h1>
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