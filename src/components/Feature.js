import React, { Component } from 'react';
import './Feature.css'
import iPhone from '../images/iPhoneBlankScreen.png';
import report from '../images/report.png';
import intro from '../video/Fentanyl_Intro.mp4';
import vid2 from '../video/RP5.mp4';
import vid3 from '../video/RP4.mp4';

const Feature = (props) => {

    let featureStyles, headerStyles, subStyles, phoneStyles;

        if (props.scroll > 14 && props.active === props.info.id) {
            featureStyles = "featureSection fadeInSwipe"
            headerStyles = "featureHeader fadeInSwipe";
            subStyles = "featureSub fadeInSwipe";
            // phoneStyles = "phone fadeInSwipe"
        } else {
            featureStyles = "featureSection"
            headerStyles = "featureHeader fadeOut";
            subStyles = "featureSub fadeOut";
            // phoneStyles = "phone fadeOut"
        }
    
        // if (props.scroll > 10) {
        //     headerStyles = "featureHeader fadeIn"
        // }
        // if (props.scroll > 12) {
        //     subStyles = "featureSub fadeIn"
        // }
        // if (props.scroll > 14) {
        //     phoneStyles = "phone fadeIn"
        // }
        // if (props.scroll > 25) {
        //     headerStyles = "featureHeader refresher"
        //     subStyles = "featureSub refresher"
        // }
        // if (props.scroll > 45) {
        //     headerStyles = "featureHeader refresher2"
        //     subStyles = "featureSub refresher2"
        // }
    
        return (
            <div className={featureStyles}>
                <div className={headerStyles}>
                    <div className="iconContainer">
                        <img src={report} width="70px" alt="Deeply reported icon. Search Document by Juicy Fish from the Noun Project"/>
                    </div>
                    <div className="featureHeaderText">
                        <h2 className="featureTitle">{props.info.header}</h2>
                    </div>
                </div>
                <div className={subStyles}>
                    <p>{props.info.sub}</p>
                </div> 
                <div className={phoneStyles}>
                    <img className="phoneImg" src={iPhone} alt="iPhone graphic" width="60%"/>
                    <video className="demoVid" alt="introVideo" width="60%" autoPlay muted>
                        <source src={intro} type="video/mp4" />
                        {/* <source src={vid2} type="video/mp4" />
                        <source src={vid3} type="video/mp4" /> */}
                    </video>
                </div>
            </div>
        )
}

export default Feature