import React, { useState } from 'react';
import '../Styles/Faq.css';
import {
    FaPlus,
} from 'react-icons/fa';


import faq from '../Images/faq-image.svg';


const Faq = ()=> {
    

    const [click, setClick] = useState(false)

    function handleClick() {
        setClick(!click)
    }


    return (
        <div className='faq'>
            <h1 className='faq-heading'>Frequently Asked Question</h1>
            <div className='question-answer-section'>
                <div className='image-container'>
                    <img src={faq} alt='Man Standing' className='faq-image' />
                </div>
                <div className='question-answer-container'>
                    <div className='each-question-container'>
                        <div className='question' >
                            <p>What is Web3 Hub?</p>
                            <FaPlus className='add-icon' onClick={handleClick}/>
                        </div>
                        { click && <div className='answer'>
                            <p>This is a Blockchain Company</p>
                        </div> }
                    </div>
                    <div className='question-answer-container'>
                        <div className='question'>
                            <p>What is Web3 Hub?</p>
                            <FaPlus className='add-icon' onClick={handleClick}/>
                        </div>
                        {/* <div className='answer'>
                            <p>This is a Blockchain Company</p>
                        </div>  */}
                    </div>
                    <div className='question-answer-container'>
                        <div className='question'>
                            <p>What is Web3 Hub?</p>
                            <FaPlus className='add-icon' onClick={handleClick}/>
                        </div>
                        {/* <div className='answer'>
                            <p>This is a Blockchain Company</p>
                        </div> */}
                    </div>
                    <div className='question-answer-container'>
                        <div className='question'>
                            <p>What is Web3 Hub?</p>
                            <FaPlus className='add-icon' onClick={handleClick}/>
                        </div>
                        {/* <div className='answer'>
                            <p>This is a Blockchain Company</p>
                        </div> */}
                    </div>
                    <div className='question-answer-container'>
                        <div className='question'>
                            <p>What is Web3 Hub?</p>
                            <FaPlus className='add-icon' onClick={handleClick}/>
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