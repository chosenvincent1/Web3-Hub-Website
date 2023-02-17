import React from "react";
import '../Styles/Team.css';

import member from '../Images/Member.svg';

const Team = ()=> {
    return (
        <div className="team">
            <div className="team-heading-container">
                <h1 className="team-heading-title">Our Team</h1>
                <h2>Meet our awesome team of instructors</h2>
            </div>
            <div className="team-container">
                <div className="each-team-container">
                    <img src={member} alt="Web Developer"/>
                    <h3>Web Developer</h3>
                </div>
                <div className="each-team-container">
                    <img src={member} alt="Web Developer"/>
                    <h3>Web Developer</h3>
                </div>
                <div className="each-team-container">
                    <img src={member} alt="Web Developer"/>
                    <h3>Web Developer</h3>
                </div>
                <div className="each-team-container">
                    <img src={member} alt="Web Developer"/>
                    <h3>Web Developer</h3>
                </div>
                <div className="each-team-container">
                    <img src={member} alt="Web Developer"/>
                    <h3>Web Developer</h3>
                </div>
                <div className="each-team-container">
                    <img src={member} alt="Web Developer"/>
                    <h3>Web Developer</h3>
                </div>
            </div>
        </div>
    )
}

export default Team