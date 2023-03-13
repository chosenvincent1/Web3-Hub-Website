import React from "react";
import '../Styles/Footer.css';

import footerLogo1 from '../Images/Footer-Logo.svg';
import footerWeb3Hub from '../Images/Footer-Web3-Hub.svg';

const Footer = ()=> {
    return(
        <div className="footer">
            <div className="footer-logo-container">
                <div className="first-logo-container">
                    <img src={footerLogo1} alt="Logo" className="first-logo"/>
                </div>
                <div className="second-logo-container">
                    <img src={footerWeb3Hub} alt="Logo" className="second-logo" />
                </div>
            </div>
            <p className="copy-footer">&copy; <span className='web3hub-footer'>Web3 hub</span> 2023</p>
            <div className="footer-text-container">
                <p> All right reserved. Trademarks nd brands are the properties of their respective owners</p>
                <p>Privacy policy legal</p>
            </div>
        </div>
    )
}

export default Footer