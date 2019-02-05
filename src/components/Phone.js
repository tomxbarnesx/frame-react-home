import React, { Component } from 'react';

import './Feature.css';

import iPhone from '../images/iPhoneBlankScreen.png';
import Mute from '../images/mute.png';
import Loud from '../images/loud.png';
import intro from '../video/Fentanyl_Intro.mp4';
import vid2 from '../video/RP5.mp4';
import vid3 from '../video/RP4.mp4';

class Phone extends Component {

    constructor(){
        super();
        this.state = {
            mute: 1,
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        if (this.state.mute === 1){
            this.setState({
                mute: 0
            })
            document.getElementById("vidPlayer").muted = false
        } else {
            this.setState({
                mute: 1
            })
            document.getElementById("vidPlayer").muted = true
        }
    }

    render(props) {
        let phoneStyles = "phone";
        let quickWidth, quickShift;
        let phoneIcon = [Loud, Mute];
        let videos = [intro, vid2, vid3];
    
        if (this.props.active === 4) {
            setTimeout(() => {
                phoneStyles = "phone"
            }, 1000)
        } else {
            phoneStyles = "phone fadeInSwipeLeft"
        }

        if (this.state.mute === 1) {
            quickWidth = "4%";
            quickShift = {right: "31%"};
        } else {
            quickWidth = "5%";
            quickShift = null;
        }

        return (
            <div className={phoneStyles}>
                <img className="phoneImg" src={iPhone} alt="iPhone graphic" width="50%"/>
                <img className="phoneMute" src={phoneIcon[this.state.mute]} alt="Mute button" width={quickWidth} style={quickShift} onClick={this.handleClick}/>
                <video id="vidPlayer" className="demoVid" alt="introVideo" width="47%" autoPlay muted playsInline src={videos[this.props.active - 1]} type="video/mp4">
                </video>
            </div>
        )
    }
}

export default Phone;