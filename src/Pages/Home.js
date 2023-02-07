import React from 'react';
import Navbar from '../Components/Navbar';
import Team from '../Components/Team';
import Faq from '../Components/Faq';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import '../Styles/Home.css';


const Home = ()=> {
    return (
        <>
        <div className='home-page'>
            <Navbar />
            <div className='home-text-container'>
                <p className='home-md-text'>welcome to web3 hub</p>
                <h1 className='home-lg-text'>the internet of blockchain</h1>
                <p className='home-sm-text'>I am a Web Developer and Technical writer. I have proficient knowledge in JavaScript, ReactJS, NextJS, React Native, NodeJS and Database. Aside coding, I love playing chess and discussing tech related topics with other developers.</p>
            </div>
        </div>
        <About />
        <Services />
        <Team />
        <Faq />
        <Contact />
        </>
    )
}

export default Home;