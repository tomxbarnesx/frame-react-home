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
        console.log(this.state.open)
    }

    //Click the hamburger menu to see the animation
//You can click the X to close or click anywhere outside the menu

// $(document).ready(function(){
// 	$('.hamburger-shell').click(function(){
// 		$('#menu').slideToggle(300);
// 		$('.top').toggleClass('rotate');
// 		$('.middle').toggleClass('rotate-back');
// 		$('.menu-name').toggleClass('bump');
// 		$('.bg-cover').toggleClass('reveal');
// 	});
// 	$('.bg-cover').click(function(){
// 		$('#menu').slideToggle(300);
// 		$('.top').toggleClass('rotate');
// 		$('.middle').toggleClass('rotate-back');
// 		$('.menu-name').toggleClass('bump');
// 		$('.bg-cover').toggleClass('reveal');
// 	})
// });


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
            <div className={bgCover}></div>
            <div className="hamburger-shell" onClick={this.handleClick}>
                <div className={top}></div>
                <div className={middle}></div>
                <ul id="menu" style={menu}>
                    <Link to="/frame-react-home"><li>Home</li></Link> 
                    <Link to="/sign-up"><li>Sign up</li></Link>
                    <Link to="/log-in"><li>Log in</li></Link> 
                </ul>
            </div>
        </div>
        )
    }   
}

export default Nav;