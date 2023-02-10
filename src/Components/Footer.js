import React from "react";
import '../Styles/Footer.css';

const Footer = ()=> {
    return(
        <div className="footer">
            <div className="footer-logo-container">
                <div className="first-logo-container">
                    <img src="../Images/Footer-Logo.svg" alt="Logo" className="first-logo"/>
                </div>
                <div className="second-logo-container">
                    <img src="../Images/Footer-Web3-Hub.svg" alt="Logo" className="second-logo" />
                </div>
            </div>
            <div className="footer-text-container">
                <p>WEB3 HUB is a professional consultancy company which aims to expand the knowledge</p>
                <p>welcome to web3 hub</p>
            </div>
        </div>
    )
}

export default Footer