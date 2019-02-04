import React, { Component } from 'react';

import cal from '../images/cal.png';
import text from '../images/text.png'

import "./Delivery.css";

class Delivery extends Component {
    constructor() {
        super()
        this.state = {
            open: false,
            active: null
        }
    }

    render() {
        return(
            <div className="deliveryMaster">
                <h2>DELIVERY OPTIONS</h2>
                <div className="deliveryIconContainer">
                    <div className="deliveryIcon active"><img src={cal} alt="Select calendar" width="100%"/></div>
                    <div className="deliveryIcon"><img src={text} alt="Select text" width="100%"/></div>
                    <div className="deliveryIcon"></div>
                </div>
                <div className="connector"></div>
                <div className="optionsBox"> </div>
            </div>
        )
    }
}

export default Delivery;