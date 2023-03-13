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
                    <h1 className='text-title'>About Us</h1>
                    <p className='about-body'>Web3 Hub is a technology company that provides a wide range of services, including Web2 and Web3 solutions and tech education solutions. We specialize in the development of Decentralized Applications (DApps) and blockchain solutions, as well as traditional web development services. We are a team of experienced developers, designers, and project managers who are passionate about exploring the full potential of technology and creating innovative solutions for our clients.</p>
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