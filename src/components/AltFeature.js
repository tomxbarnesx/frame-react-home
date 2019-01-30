import React from 'react';
import interactive from '../images/interactive.png';
import detour from '../images/detour.png';

const AltFeature = (props) => {
    return (
        <div className="featureSection">
           <div className="featureHeader">
                <div className="featureHeaderText">
                    <h2 className="featureTitle">Immersive, interactive storytelling</h2>
                </div>
                <div className="iconContainer">
                    <img src={interactive} width="100%" alt="Deeply reported icon. Search Document by Juicy Fish from the Noun Project"/>
                </div>
            </div>
            <div className="featureSub">
                <p>Interactive features allow the reader greater agency to choose their path through the story</p>
            </div>
            <div className="fadeBox">
                <img src={detour} className="blurPic" alt="detour image" width="100%"></img>
            </div>
        </div>
    )
}

export default AltFeature;