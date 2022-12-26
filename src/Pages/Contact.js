import React from 'react';
import '../Styles/Contact.css'

const Contact = ()=> {
    return (
        <div className='contact'>
            <div>
                <h1>Contact Us</h1>
                <p>Follow Us</p>
                <div></div>
                <p>Copywrite (c) Web3 2020</p>
            </div>
            <form className='form'>
                <p>Send us a Message or Request</p>
                <label>Email</label>
                <input type='email' />

                <label>Message</label>
                <textarea />
            </form>
        </div>
    )
}

export default Contact;