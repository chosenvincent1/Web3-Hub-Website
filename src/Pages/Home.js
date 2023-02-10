import React from 'react';
import Navbar from '../Components/Navbar';
import Team from '../Components/Team';
import Faq from '../Components/Faq';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Footer from '../Components/Footer';
import '../Styles/Home.css';


const Home = ()=> {
    return (
        <>
        <div className='home-page'>
            <Navbar />
            <div className='home-text-container'>
                <p className='home-md-text'>welcome to web3 hub</p>
                <h1 className='home-lg-text'>Unlocking The Potential Of The African Blockchain Ecosystem.</h1>
                <p className='home-sm-text'>WEB3 HUB is a professional consultancy company which aims to expand the knowledge, skills and expertise of the African Blockchain ecosystem</p>
            </div>
        </div>
        <About />
        <Services />
        <Team />
        <Faq />
        <Contact />
        <Footer />
        </>
    )
}

export default Home;