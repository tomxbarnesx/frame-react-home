import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import featureData from '../data/features';
import Landing from './Landing';
import Feature from './Feature';
import Phone from './Phone';
import ParticleWrapper from './ParticleWrapper';

class Home extends Component {
    constructor() {
        super();
        this.state = {
          featureData: featureData,
          active: 0,
          scroll: 0,
          delta: 0,
          percentage: 0,
          dragStart: null,
          locked: true,
        }
        // this.handleScroll = this.handleScroll.bind(this)
        this.disableScroll = this.disableScroll.bind(this)
        this.MouseWheelHandler = this.MouseWheelHandler.bind(this)
        this.nextSlide = this.nextSlide.bind(this)
        this.prevSlide = this.prevSlide.bind(this)
        this.showSlide = this.showSlide.bind(this)
        this.touchStart = this.touchStart.bind(this)
        this.touchMove = this.touchMove.bind(this)
        this.touchEnd = this.touchEnd.bind(this)
    }
    
    componentDidMount(){
        this.disableScroll();
    }

    componentWillUnmount(){
        this.disableScroll();
    }

    throttle(fn, wait) {
        let time = Date.now()

        return function(){
            if((time + wait - Date.now()) < 0) {
            fn()
            time = Date.now()
            }
        }
    }
    
    disableScroll(){
        let home = document.getElementsByClassName("home")[0];
        // let stickyWindow = document.getElementsByClassName("stickyWindow")[0];
        // if (this.state.locked === true) {
        //     if (window.addEventListener) {
        //         // IE9, Chrome, Safari, Opera
        //         window.addEventListener("mousewheel", this.MouseWheelHandler, true);
        //         // Firefox
        //         window.addEventListener("DOMMouseScroll", this.MouseWheelHandler, true);
        //         // Mobile
        //         stickyWindow.addEventListener("touchstart", this.touchStart, false);
        //         stickyWindow.addEventListener("touchmove", this.touchMove, false);
        //         stickyWindow.addEventListener("touchend", this.touchEnd, false);
        //     }
        //   // IE 6/7/8
        //   else window.attachEvent("onmousewheel", this.MouseWheelHandler);
        // } else {
        //     window.removeEventListener("mousewheel", this.MouseWheelHandler, true);
        //     window.removeEventListener("DOMMouseScroll", this.MouseWheelHandler, true);
        //     // Mobile
        //     stickyWindow.removeEventListener("touchstart", this.touchStart);
        //     stickyWindow.removeEventListener("touchmove", this.touchMove);
        //     stickyWindow.removeEventListener("touchend", this.touchEnd);
        // }

        home.addEventListener("mousewheel", this.MouseWheelHandler, true);
        // Firefox
        home.addEventListener("DOMMouseScroll", this.MouseWheelHandler, true);
        // Mobile
        home.addEventListener("touchstart", this.touchStart, false);
        home.addEventListener("touchmove", this.touchMove, false);
        home.addEventListener("touchend", this.touchEnd, false);
      }
    
    MouseWheelHandler(e) {
        var e = window.event || e; // old IE support
        let scrollStrength = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)))
        let scrollThreshold = 35;
        console.log('DELTA', this.state.delta)
       
        //IF SCROLLING UP
        if (scrollStrength > 0) {
            this.setState(prevState => {
                return { 
                delta: prevState.delta - 1
                }
            })
            if(Math.abs(this.state.delta) >= scrollThreshold) {
                this.prevSlide();
            }
        } 
        // SCROLLING DOWN
        else {
            this.setState(prevState => {
                return { 
                delta: prevState.delta + 1
                }
            })
            if(Math.abs(this.state.delta) >= scrollThreshold) {
                this.nextSlide();
            }
        }

        e.preventDefault();
        return false;
    }
    
    prevSlide() {

        console.log("PREVIOUS")
        if (this.state.active > 0){
            this.setState(prevState => {
                return {
                active: prevState.active - 1
                }
            })
        }
        this.showSlide();
    }
    
    nextSlide() {

        console.log("NEXT")

        this.setState(prevState => {
            return {
            active: prevState.active + 1
            }
        })

        this.showSlide();
    }

    showSlide() {
        console.log("ACTIVE", this.state.active)
        this.setState({delta: 0})
    }
    
    // handleScroll() {
    //     const scrollHeight = document.body.scrollHeight;
    //     const windowHeight = window.innerHeight
    //     const scrollTop = window.scrollY;
    //     let scrollAmount = (scrollTop / (scrollHeight-windowHeight)) * 100; // get amount scrolled (in %)
    //     // this.disableScroll();

    //     // this.setState(prevState => {
    //     //   return {
    //     //     scroll: scrollAmount
    //     //   }
    //     // })
    
    //     // if (this.state.scroll > 44 && this.state.scroll < 50){
    //     //     this.setState(
    //     //         {locked: true}
    //     //     )
    //     //     console.log("LOCKED!")
    //     //     this.disableScroll();
    //     // } 
    //     // if (this.state.scroll < 48 || this.state.scroll > 55) {
    //     //     this.setState(
    //     //         {locked: false}
    //     //     )
    //     //     this.disableScroll();
    //     // }    
    //     // console.log('STATE SCROLL:', this.state.scroll);
    // }
    
      //MOBILE SCRIPTS
    
    touchStart(event) {
    
        if (this.state.dragStart !== null) { return; }
    
        console.log("TOUCH START INIT")
      
        // where in the viewport was touched
        this.setState({
          dragStart: event.touches[0].clientY
        })
    
        console.log(this.state.dragStart)

      }
    
    touchMove (event) {
    
        if (this.state.dragStart === null) { return; }
      
        this.setState(prevState => {
          return {
            delta: this.state.dragStart - event.touches[0].clientY,
            percentage: this.state.delta / window.innerHeight
          }
        })
    
        console.log(this.state.percentage)
      
        // Don't drag element. This is important.
        if (this.state.locked === true){
          event.preventDefault();
          return false;
        }
    }
    
    touchEnd () {

        const dragThreshold = 0.15;
        this.setState({
            dragStart: null
        });
        // target.classList.remove('no-animation');
        // if (previousTarget) { 
        //   previousTarget.classList.remove('no-animation'); 
        // }
        
        if (this.state.percentage >= dragThreshold) {
            this.nextSlide();
        } else if ( Math.abs(this.state.percentage) >= dragThreshold ) {
            this.prevSlide();
        } else {
            // show current slide i.e. snap back
            this.showSlide();
        }
        
        this.setState({
            percentage: 0
        })
    
    }
      
    
    render() {

        let featureStyles;
        let footStyles = "slide";

        if (this.state.active > 0 && this.state.active < 4) {
            featureStyles = "slide active"
        } else if (this.state.active > 3) {
            footStyles ="slide active" 
        } else {
            featureStyles = "slide"
        }
        
        const features = this.state.featureData.map((feature) => {
            return <Feature key={feature.id} info={feature} scroll={this.state.scroll} active={this.state.active} />
        })

        return (
            <div className="home">
                <Landing active={this.state.active}/>
                <div className={featureStyles}>
                    {features}
                    <Phone scroll={this.state.scroll} active={this.state.active} />
                </div>
                {/* <ParticleWrapper/> */}
                <footer className={footStyles}>
                    <h2>Experience the future of the magazine.</h2>
                    <p>Sign up for free our inaugural month.</p>
                    <Link to="/sign-up"><button className="buttonStyle">Sign up</button></Link>
                </footer>
            </div>
        );
    }
}

export default Home