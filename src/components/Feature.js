import React, { Component } from 'react';
import './Feature.css';

import report from '../images/report.png';
import interactive from '../images/interactive.png';
import cal from '../images/cal.png';

const Feature = (props) => {

        let featureStyles, headerStyles, subStyles;
        let icons = [report, interactive, cal]

        if (props.scroll > 14 && props.active === props.info.id && props.info.position === "left") {
            featureStyles = "featureSection fadeInSwipeLeft"
            headerStyles = "featureHeader fadeInSwipeLeft";
            subStyles = "featureSub fadeInSwipeLeft";
        } else if (props.scroll > 14 && props.active === props.info.id && props.info.position === "right" ) {
            featureStyles = "featureSection fadeInSwipeRight"
            headerStyles = "featureHeader reverse fadeInSwipeRight";
            subStyles = "featureSub fadeInSwipeRight";
        } else {
            featureStyles = "featureSection"
            headerStyles = "featureHeader fadeOut";
            subStyles = "featureSub fadeOut";
        }

    
        return (
            <div className={featureStyles}>
                <div className={headerStyles}>
                    <div className="iconContainer">
                        <img src={icons[props.active]} width="70px" alt="Deeply reported icon. Search Document by Juicy Fish from the Noun Project"/>
                    </div>
                    <div className="featureHeaderText">
                        <h2 className="featureTitle">{props.info.header}</h2>
                    </div>
                </div>
                <div className={subStyles}>
                    <p>{props.info.sub}</p>
                </div> 
            </div>
        )
}

export default Feature