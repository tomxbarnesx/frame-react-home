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
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e){
        if (this.state.active === null || this.state.active != e.target.id){
            this.setState({
                open: true,
                active: e.target.id
            })
        } else if (this.state.active === e.target.id) {
            this.setState({
                open: false,
                active: null
            })
        }
    }

    render() {

        let optionsBox, connector;

        if (this.state.open === false){
            optionsBox = "optionsBox"
            connector = "connector"
        } else {
            optionsBox = "optionsBox active"
            connector = "connector active"
        }

        if (this.state.active === 0){
            
        } else if (this.state.active === 1){

        } else if (this.state.active === 2){

        }

        return(
            <div className="deliveryMaster">
                <h2>DELIVERY OPTIONS</h2>
                <div className="deliveryIconContainer">
                    <div className="deliveryIcon"><a className="deliveryClicker"><img id="0" onClick={this.handleClick} src={cal} alt="Select calendar" width="100%"/></a></div>
                    <div className="deliveryIcon"><a className="deliveryClicker"><img id="1" onClick={this.handleClick} src={text} alt="Select text" width="100%"/></a></div>
                    <div className="deliveryIcon"><a className="deliveryClicker"></a></div>
                </div>
                <div className={connector}></div>
                <div className={optionsBox}></div>
            </div>
        )
    }
}

export default Delivery;