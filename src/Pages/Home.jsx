import React, {useState, useEffect} from 'react';

import Navbar from '../Components/Navbar';
import Team from '../Components/Team';
import Faq from '../Components/Faq';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Footer from '../Components/Footer';
import OurMission from '../Components/OurMission';
import WhyChooseUs from '../Components/WhyChooseUs';
import '../Styles/Home.css';

import bitcoin from '../Images/Bitcoin.svg';
import dollar from '../Images/Dollar.svg';
import ethereum from '../Images/Ethereum.svg';
import tether from '../Images/Tether.svg';


const Home = ()=> {

      
    return (
        <>
        <div className='home-page'>
            <Navbar />
            <div className='home-text-container'>
                <p className='home-md-text'>welcome to web3 hub</p>
                <h1 className='home-lg-text'>Unlocking The Potential Of The African Blockchain Ecosystem.</h1>
                <p className='home-sm-text'>DREAM IT, THINK IT, AND DO IT.</p>
                <img src={bitcoin} alt='Bitcoin' className='coin-image bitcoin' />
                <img src={tether} alt='Tether' className='coin-image tether' />
                <img src={ethereum} alt='Ethereum' className='coin-image ethereum'/>
                <img src={dollar} alt='Dollar' className='coin-image dollar' />
            </div>
        </div>
        <About />
        <OurMission />
        <WhyChooseUs />
        <Services />
        <Team />
        <Faq />
        <Contact />
        <Footer />
        </>
    )
}

export default Home;