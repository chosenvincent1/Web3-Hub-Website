import React from "react";
import '../Styles/Team.css';

// import member from '../Images/Member.svg';
// import team2 from '../Images/team2.svg';
// import team3 from '../Images/team3.svg';
import team4 from '../Images/team4.svg';

const Team = ()=> {
    return (
        <div className="team">
            <div className="team-heading-container">
                <h1 className="team-heading-title">Our Team</h1>
                <h2>Meet our awesome team of instructors</h2>
            </div>
            <div className="team-container">
                
                <figure className="each-team-container">
                    <img src={team4} alt="Web Developer"/>
                    <figcaption className="team-name">Vincent Chosen</figcaption>
                    <figcaption className="team-role">Web Developer</figcaption>
                </figure>
                <figure className="each-team-container">
                    <img src={team4} alt="Web Developer"/>
                    <figcaption className="team-name">Vincent Chosen</figcaption>
                    <figcaption className="team-role">Web Developer</figcaption>
                </figure>
                <figure className="each-team-container">
                    <img src={team4} alt="Web Developer"/>
                    <figcaption className="team-name">Vincent Chosen</figcaption>
                    <figcaption className="team-role">Web Developer</figcaption>
                </figure>
                <figure className="each-team-container">
                    <img src={team4} alt="Web Developer"/>
                    <figcaption className="team-name">Vincent Chosen</figcaption>
                    <figcaption className="team-role">Web Developer</figcaption>
                </figure>
                <figure className="each-team-container">
                    <img src={team4} alt="Web Developer"/>
                    <figcaption className="team-name">Vincent Chosen</figcaption>
                    <figcaption className="team-role">Web Developer</figcaption>
                </figure>
                <figure className="each-team-container">
                    <img src={team4} alt="Web Developer"/>
                    <figcaption className="team-name">Vincent Chosen</figcaption>
                    <figcaption className="team-role">Web Developer</figcaption>
                </figure>
            </div>
        </div>
    )
}

export default Team