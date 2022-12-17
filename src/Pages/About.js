import React from 'react';
import '../Styles/About.css';

const About = ()=> {
    return (
        <div className='about-page'>
            <h1 className='about-header-text'>get to know more About web3 hub</h1>
            <div className='text-img-container'>
                <div className='about-text-container'>
                    <h1 className='text-title'>About</h1>
                    <p className='about-body'>I am a Web Developer and Technical writer. I have proficient knowledge in JavaScript, ReactJS, NextJS, React Native, NodeJS and Database. Aside coding, I love playing chess and discussing tech related topics with other developers. <br /> <br />

                    I am a Web Developer and Technical writer. I have proficient knowledge in JavaScript, ReactJS, NextJS, React Native, NodeJS and Database. Aside coding, I love playing chess and discussing tech related topics with other developers.
                    <br /><br />
                    I am a Web Developer and Technical writer. I have proficient knowledge in JavaScript, ReactJS, NextJS, React Native, NodeJS and Database. Aside coding, I love playing chess and discussing tech related topics with other developers.
                    </p>
                </div>
                <div className='about-img-container'>
                    <img src='../Images/about-image.png' alt='About Image' className='about-img' />
                </div>
            </div>
        </div>
    )
}

export default About;