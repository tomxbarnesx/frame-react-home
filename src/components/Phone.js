import React from 'react';

import './Feature.css';

import iPhone from '../images/iPhoneBlankScreen.png';
import intro from '../video/Fentanyl_Intro.mp4';
import vid2 from '../video/RP5.mp4';
import vid3 from '../video/RP4.mp4';

const Phone = (props) => {

    let phoneStyles = "phone";
    let videos = [intro, vid2, vid3]

    if (props.active === 4) {
        setTimeout(() => {
            phoneStyles = "phone"
        }, 1000)
    } else {
        phoneStyles = "phone fadeInSwipeLeft"
    }

    return(
        <div className={phoneStyles}>
            <img className="phoneImg" src={iPhone} alt="iPhone graphic" width="50%"/>
            <video className="demoVid" alt="introVideo" width="47%" autoPlay muted playsInline src={videos[props.active - 1]} type="video/mp4">
            </video>
        </div>
    )
}

export default Phone;