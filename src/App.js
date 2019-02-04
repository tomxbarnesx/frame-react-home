import React, { Component } from 'react';

import './App.css';
import featureData from './data/features';


import Landing from './components/Landing';
import Feature from './components/Feature';
import Phone from './components/Phone';
import ParticleWrapper from './components/ParticleWrapper';
// import AltFeature from './components/AltFeature';

class App extends Component {
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
    this.handleScroll = this.handleScroll.bind(this)
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
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount(){
    window.addEventListener("scroll", this.handleScroll);
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
    let stickyWindow = document.getElementsByClassName("stickyWindow")[0];
    if (this.state.locked === true) {
      if (window.addEventListener) {
        // IE9, Chrome, Safari, Opera
        window.addEventListener("mousewheel", this.MouseWheelHandler, true);
        // Firefox
        window.addEventListener("DOMMouseScroll", this.MouseWheelHandler, true);
        // Mobile
        stickyWindow.addEventListener("touchstart", this.touchStart, false);
        stickyWindow.addEventListener("touchmove", this.touchMove, false);
        stickyWindow.addEventListener("touchend", this.touchEnd, false);
      }
      // IE 6/7/8
      else window.attachEvent("onmousewheel", this.MouseWheelHandler);
    } else {
      window.removeEventListener("mousewheel", this.MouseWheelHandler, true);
      window.removeEventListener("DOMMouseScroll", this.MouseWheelHandler, true);
      // Mobile
      stickyWindow.removeEventListener("touchstart", this.touchStart, false);
      stickyWindow.removeEventListener("touchmove", this.touchMove, false);
      stickyWindow.removeEventListener("touchend", this.touchEnd, false);
    }
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

      if (this.state.locked === true) {
        e.preventDefault()
        return false;
      }
    }

    prevSlide() {

      console.log("PREVIOUS")

      if (this.state.active > 0){
        this.setState(prevState => {
          return {
            active: prevState.active - 1
          }
        })
      } else if (this.state.active === 0) {
        this.setState({
          locked: false
        })
      }

      this.showSlide();
    }

    nextSlide() {

      console.log("NEXT")

      if (this.state.active < 2) {
        this.setState(prevState => {
          return {
            active: prevState.active + 1
          }
        })
      } else if (this.state.active === 2) {
        this.setState({
          locked: false
        })
      }

      this.showSlide();
    }

    showSlide() {

      console.log("ACTIVE", this.state.active)

      this.setState(
        {delta: 0}
      )
    }

  handleScroll() {
    const scrollHeight = document.body.scrollHeight;
    const windowHeight = window.innerHeight
    const scrollTop = window.scrollY;
    let scrollAmount = (scrollTop / (scrollHeight-windowHeight)) * 100; // get amount scrolled (in %)

    this.setState(prevState => {
      return {
        scroll: scrollAmount
      }
    })

    if (this.state.scroll > 44 && this.state.scroll < 50){
      this.setState(
        {locked: true}
      )
      console.log("LOCKED!")
      this.disableScroll();
    } 
    if (this.state.scroll < 48 || this.state.scroll > 55) {
      this.setState(
        {locked: false}
      )
      this.disableScroll();
    }

    console.log('STATE SCROLL:', this.state.scroll);
  }

  //MOBILE SCRIPTS

  touchStart(event) {

    if (this.state.dragStart !== null) { return; }
    // if (event.originalEvent.touches) { 
    //   event = event.originalEvent.touches[0];
    // }

    console.log("TOUCH START INIT")
    console.log(event)
  
    // where in the viewport was touched
    this.setState({
      dragStart: event.clientY
    })

    // console.log(this.state.dragStart);
    // make sure we're dealing with a slide
    // target = slides.eq(currentSlideIndex)[0];	
  
    // // disable transitions while dragging
    // target.classList.add('no-animation');
  
    // previousTarget = slides.eq(currentSlideIndex-1)[0];
    // previousTarget.classList.add('no-animation');
  }

  touchMove (event) {

    if (this.state.dragStart === null) { return; }
    // if (event.originalEvent.touches) { 
    //   event = event.originalEvent.touches[0];
    // }
  
    this.setState(prevState => {
      return {
        delta: this.state.dragStart - event.clientY,
        percentage: this.state.delta / window.innerHeight
      }
    })
  
    // Going down/next. Animate the height of the target element.
    // if (this.state.percentage > 0) {
    //   this.setState(prevState => {
    //     return {
    //       active: prevState.active + 1
    //     }
    //   })
    // }
  
    // // Going up/prev. Animate the height of the _previous_ element.
    // else if (previousTarget) {
    //   this.setState(prevState => {
    //     return {
    //       active: prevState.active - 1
    //     }
    //   })
    // }
  
    // Don't drag element. This is important.
    event.preventDefault();
    return false;
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
    const features = this.state.featureData.map((feature) => {
      return <Feature key={feature.id} info={feature} scroll={this.state.scroll} active={this.state.active} />
    })

    return (
      <div className="App">
        <Landing />
        <div className="stickyContent">
          <div className="stickyWindow">
            {features}
            <Phone scroll={this.state.scroll} active={this.state.active} />
          </div>
        </div>
        {/* <ParticleWrapper/> */}
        <footer></footer>
      </div>
    );
  }
}

export default App;
