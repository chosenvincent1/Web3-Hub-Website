import React from 'react';
import '../Styles/Contact.css'

const Contact = ()=> {
    return (
        <div className='contact'>
            <div className='contact-us-container'>
                <h1 className='contact-us'>Contact Us</h1>
                <p className='follow-us'>Follow Us</p>
                <div></div>
                <p className='copywrite'>Copywrite &copy; Web3 2020</p>
            </div>
            <form className='form'>
                <p className='send-request'>Send us a Message or Request</p>
                <label htmlFor='email' className='email-label'>Email</label>
                <input type='email' id='email' className='email-input'/>

                <label htmlFor='textarea' className='textarea-label'>Message</label>
                <textarea id='textarea' className='textarea' />

                <div className='send-btn-container'>
                    <button className='send-btn'>Send</button>
                </div> 
            </form>
        </div>
    )
}

export default Contact;