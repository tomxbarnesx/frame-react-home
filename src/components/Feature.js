import React from 'react';
import './Feature.css'
import iPhone from '../images/iPhoneBlankScreen.png';
import report from '../images/report.png';
import intro from '../video/Fentanyl_Intro.mp4';

const Feature = (props) => {
    return (
        <div className="featureSection">
            <div className="featureHeader">
                <div className="iconContainer">
                    <img src={report} width="100%" alt="Deeply reported icon. Search Document by Juicy Fish from the Noun Project"/>
                </div>
                <div className="featureHeaderText">
                    <h2 className="featureTitle">Deeply reported narrative journalism</h2>
                </div>
            </div>
            <div className="featureSub">
                <p>Riveting human stories that expose the underlying forces driving the news</p>
            </div> 
            <div className="phone">
                <img src={iPhone} alt="iPhone graphic" width="60%"/>
                <video className="demoVid" alt="introVideo" width="60%" autoPlay muted>
                    <source src={intro} type="video/mp4" />
                </video>
            </div>
        </div>
    )
}

export default Feature