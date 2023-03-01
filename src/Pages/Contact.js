import React, { useState } from 'react';
import '../Styles/Contact.css';
import { 
    FaFacebook, 
    FaTwitter,
    FaTelegram,
    FaLinkedin,
} from 'react-icons/fa';

const Contact = ()=> {
    const [data, setData] = useState({email: "", text: ""});
    const [message, setMessage] = useState([]);

    const handleChange = (event)=> {
        setData(prevData => {
            return {
                ...prevData,
                [event.target.name]: event.target.value
            }
        })
    }
  
    const handleSubmit = (event)=> {
        event.preventDefault();
        setMessage(prevMessage => {
            return prevMessage.concat(data)
        });

        setData({email: "", text: ""});
    }

    // console.log(message)



    return (
        <div className='contact'>
            <div className='contact-us-container'>
                <h1 className='contact-us'>Contact Us</h1>
                <div className='follow-us-container'>
                    <p className='follow-us'>Follow Us</p>
                    <div className='social-icon-container'>
                        <FaFacebook className='social-icons' />
                        <FaTwitter className='social-icons' />
                        <FaLinkedin className='social-icons' />
                        <FaTelegram className='social-icons' />
                    </div>
                </div>
                <p className='copywrite'>Copywrite &copy; Web3 2020</p>
            </div>
            <form className='form' onSubmit={handleSubmit}>
                <p className='send-request'>Send us a Message or Request</p>

                <label htmlFor='email' className='email-label'>Email</label>
                <input 
                    type='email' 
                        id='email' 
                        className='email-input'
                        name='email'
                        value={data.email}
                        onChange={handleChange}
                    />

                <label htmlFor='textarea' className='textarea-label'>Message</label>
                <textarea
                    id='textarea' 
                    className='textarea'
                    name='text'
                    value={data.text}
                    onChange={handleChange}
                />

                <div className='send-btn-container'>
                    <p className='mobile-copywrite'>Copywrite &copy; Web3 2020</p>
                    <button className='send-btn'>Send</button>
                </div> 
            </form>
            <div className='mobile-follow-us-container'>
                    <p className='mobile-follow-us'>Follow Us</p>
                    <div className='mobile-social-icon-container'>
                        <FaFacebook className='mobile-social-icons' />
                        <FaTwitter className='mobile-social-icons' />
                        <FaLinkedin className='mobile-social-icons' />
                        <FaTelegram className='mobile-social-icons' />
                    </div>
            </div>
        </div>
    )
}

export default Contact;