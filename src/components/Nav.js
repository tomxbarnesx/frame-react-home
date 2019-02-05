import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import './Nav.css';

class Nav extends Component {
    constructor() {
        super()
        this.state = {
            open: false,
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        if (this.state.open === false){
            this.setState({
                open: true
            })
        } else {
            this.setState({
                open: false
            })
        }
    }


    render() {

        let top, middle, menu, bgCover;
        
        if (this.state.open === false) {
            top = "hamb top";
            middle = "hamb middle";
            menu = {display: "none"};
            bgCover = "bg-cover";
        } else {
            top = "hamb top rotate";
            middle = "hamb middle rotate-back";
            menu = {display: 'block'};
            bgCover = "bg-cover reveal";
        }

        return (
        <div className="button_container" id="toggle">
            <div className={bgCover}>
                <ul id="menu" style={menu}>
                    <Link to="/frame-react-home" onClick={this.handleClick}><li>Home</li></Link> 
                    <Link to="/sign-up" onClick={this.handleClick}><li>Sign up</li></Link>
                    <Link to="/log-in" onClick={this.handleClick}><li>Log in</li></Link> 
                </ul>
            </div>
            <div className="hamburger-shell" onClick={this.handleClick}>
                <div className={top}></div>
                <div className={middle}></div>
            </div>
        </div>
        )
    }   
}

export default Nav;