import React from 'react';

import './Feature.css';

import iPhone from '../images/iPhoneBlankScreen.png';
import intro from '../video/Fentanyl_Intro.mp4';
import vid2 from '../video/RP5.mp4';
import vid3 from '../video/RP4.mp4';

const Phone = (props) => {

    let phoneStyles = "phone";
    let videos = [intro, vid2, vid3]

    phoneStyles = "phone fadeInSwipeLeft"

    return(
        <div className={phoneStyles}>
            <img className="phoneImg" src={iPhone} alt="iPhone graphic" width="60%"/>
            <video className="demoVid" alt="introVideo" width="57%" autoPlay muted playsinline src={videos[props.active - 1]} type="video/mp4">
            </video>
        </div>
    )
}

export default Phone;