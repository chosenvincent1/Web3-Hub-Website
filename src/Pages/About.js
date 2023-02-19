import React from 'react';
import '../Styles/About.css';

import aboutImage from '../Images/about-image.png';
import aboutImageMobile from '../Images/about-image-mobile.svg';

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
                    <img src={aboutImageMobile} alt='About' className='about-img-mobile' />
                    <img src={aboutImage} alt='About' className='about-img' />
                </div>
            </div>
        </div>
    )
}

export default About;