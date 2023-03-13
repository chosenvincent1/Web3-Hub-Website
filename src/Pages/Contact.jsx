import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../Styles/Contact.css';
import { 
    FaFacebook, 
    FaTwitter,
    FaTelegram,
    FaLinkedin,
} from 'react-icons/fa';

const Contact = ()=> {
    const [data, setData] = useState({email: "", message: ""});
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

        emailjs.sendForm('service_i0gog9a', 'template_7z98v2d', event.target, 'uzQe2u-m8xPgpc0xW')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        setData({email: "", message: ""});
    }



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
                <p className='copywrite'>Copywrite &copy; <span className='web3hub-copywrite'>Web3 hub</span> 2023</p>
            </div>
            <form className='form' onSubmit={handleSubmit}>
                <p className='send-request'>Send us a message or request</p>
                <p className='contact-us-description'>If you're interested in learning more about our services or have a project in mind, please don't hesitate to contact us. We'd be happy to discuss how we can help you leverage the power of technology and education to achieve your goals.</p>

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
                    name='message'
                    value={data.message}
                    onChange={handleChange}
                />

                <div className='send-btn-container'>
                    <p className='mobile-copywrite'>Copywrite &copy; <span className='web3hub-copywrite'>Web3 hub</span> 2023</p>
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