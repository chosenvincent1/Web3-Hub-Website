import React from "react";
import '../Styles/WhyChooseUs.css';

const WhyChooseUs = ()=> {
    return (
        <div className="why-choose-us">
            <h1>Why Choose Us</h1>
            <p>Our mission is to empower individuals and businesses by providing them with the knowledge and tools they need to succeed in the digital age. We are committed to delivering high-quality solutions that are secure, transparent, and scalable, and to providing our clients with the education they need to stay ahead of the curve.</p>
            
            <div className="reasons-container">
                <div className="reason">
                    <h2>Experienced Team</h2>
                    <p>Our team has years of experience in both traditional web development and the development of blockchain solutions, as well as tech education solutions.</p>
                </div>

                <div className="reason">
                    <h2>Customized Solution</h2>
                    <p>We believe that every client is unique, and we take the time to understand your needs and develop solutions that are tailored to your specific requirements.</p>
                </div>

                <div className="reason">
                    <h2>Transparent Process</h2>
                    <p>We believe in transparency and keep our clients informed throughout the development process.</p>
                </div>

                <div className="reason">
                    <h2>Quality Assurance</h2>
                    <p>We have a rigorous quality assurance process that ensures that our solutions are reliable, scalable, and secure.</p>
                </div>
            </div>
        </div>
    );
}

export default WhyChooseUs