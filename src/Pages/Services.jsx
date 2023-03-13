import React from "react";
import '../Styles/Services.css';
import {
    FaCode, 
    FaBitcoin
} from 'react-icons/fa';

const Services = ()=> {
    return (
        <div className="services">
            <div className="services-heading-container">
                <h1>Services</h1>
                <h2>Our Services Includes:</h2>
            </div>
            <div className="services-container">
                <div className="each-service-container">
                    <FaCode className="service-icon" />
                    <h2 className="each-service-title">Web Development</h2>
                    <p className="each-service-description">
                    We offer a full range of traditional web development services, including website design, e-commerce development, and custom web application development.
                    </p>
                </div>
                <div className="each-service-container">
                    <FaBitcoin className="service-icon" />
                    <h2 className="each-service-title">Blockchain Development</h2>
                    <p className="each-service-description">
                    We offer end-to-end blockchain development services that cover everything from ideation to deployment. Our team has experience working with a variety of blockchain technologies.
                    </p>
                </div>
                <div className="each-service-container">
                    <FaBitcoin className="service-icon" />
                    <h2 className="each-service-title">Graphics Design</h2>
                    <p className="each-service-description">
                    We specialize in the development/design of graphic contents such as flyers, billboards, and other related graphics for both domestic and commercial use.
                    </p>
                </div>
                <div className="each-service-container">
                    <FaBitcoin className="service-icon" />
                    <h2 className="each-service-title">Smart Contract Development</h2>
                    <p className="each-service-description">
                    We have extensive experience in the development of smart contracts that can be used to automate various business processes. Our team can help you create smart contracts that are efficient, reliable, and secure.
                    </p>
                </div>
                <div className="each-service-container">
                    <FaBitcoin className="service-icon" />
                    <h2 className="each-service-title">Tech Education Solution</h2>
                    <p className="each-service-description">
                    We provide tech education solutions that cater to the needs of individuals and businesses. Our education solutions include workshops, online courses, and customized training programs.
                    </p>
                </div>
                <div className="each-service-container">
                    <FaBitcoin className="service-icon" />
                    <h2 className="each-service-title">Decentralized Application Development</h2>
                    <p className="each-service-description">
                    We specialize in the development of decentralized applications that run on blockchain technology. Our team can help you create DApps that are secure, scalable, and user-friendly.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Services