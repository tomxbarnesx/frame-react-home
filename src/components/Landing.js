import React from 'react';
import whiteLogo from '../images/whiteLogo.png';
import downArrow from '../images/downArrow.png';

const Landing = (props) => {

    let slideStyle;
    
    if (props.active === 0){
        slideStyle = "slide active"
    } else {
        slideStyle = "slide"
    }

    return (
    <div className={slideStyle}>
        {/* <nav className="topNav">
            <div className="navItem"><strong>ABOUT</strong></div>
            <div className="navItem"><strong>CONTACT</strong></div>    
        </nav> */}
        <div className="logoContainer"> 
            <img className="centerLogo" src={ whiteLogo } alt="Frame logo"/>
            <div className="logoBreak"></div>
            <div className="logoSub">
                <h2 className="logoH2">A NEWS MAGAZINE FOR THIS CENTURY</h2>
            </div>
        </div>
        <div className="landingButtons">
            <a><div className="signUpButton"><strong>SIGN UP FREE OUR INAUGURAL MONTH</strong></div></a>
            <a><div className="signUpButton"><strong>BECOME A FOUNDING SUBSCRIBER</strong></div></a>
        </div>
        <div className="downPoint">
            <img src={ downArrow } width="100%" alt="down scroll"/>
        </div>
    </div>
    )
}

export default Landing;