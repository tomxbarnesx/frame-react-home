import React, { Component } from 'react';

import './App.css';
import featureData from './data/features';


import Landing from './components/Landing';
import Feature from './components/Feature';
import ParticleWrapper from './components/ParticleWrapper'
// import AltFeature from './components/AltFeature';

class App extends Component {
  constructor() {
    super();
    this.state = {
      featureData: featureData,
      active: 0,
      scroll: 0,
      delta: 0,
      locked: true,
    }
    this.handleScroll = this.handleScroll.bind(this)
    this.disableScroll = this.disableScroll.bind(this)
    this.MouseWheelHandler = this.MouseWheelHandler.bind(this)
    this.nextSlide = this.nextSlide.bind(this)
    this.prevSlide = this.prevSlide.bind(this)
    this.showSlide = this.showSlide.bind(this)
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
    if (window.addEventListener) {
      // IE9, Chrome, Safari, Opera
      window.addEventListener("mousewheel", this.MouseWheelHandler, false);
      // Firefox
      window.addEventListener("DOMMouseScroll", this.MouseWheelHandler, false);
    }
    // IE 6/7/8
    else window.attachEvent("onmousewheel", this.MouseWheelHandler);
  }

  MouseWheelHandler(e) {
    var e = window.event || e; // old IE support
    let scrollStrength = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)))
    let scrollThreshold = 30;
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

      // slides.each(function(i, slide) {
      //   $(slide).toggleClass('active', (i >= currentSlideIndex));
      // });
    
    }
   
    // if ((this.state.delta === 0 && direction === 1) || this.state.delta === 1 || (this.state.delta === 2 && direction === -1 )){
      // if (this.state.delta >= 0 && this.state.delta <= 2) {
      // this.setState(prevState => {
      //   if ((prevState.delta === 0 && direction === 1) || (prevState.delta === 2 && direction === -1) || prevState.delta === 1) {
      //     return {
      //       delta: prevState.delta + direction
      //     }
      //   }
      // })
      // console.log("DELTA", this.state.delta)

    // } else if ((this.state.delta === 0 && direction === -1) || (this.state.delta === 2 && direction === 1)) {
    //   return
    // }
    // if ((this.state.delta === 2 && direction === 1) || (this.state.delta === 0 && direction === -1)){
    //   return
    // }
    // }

  handleScroll() {
    const scrollHeight = document.body.scrollHeight;
    const windowHeight = window.innerHeight
    const scrollTop = window.scrollY;
    let scrollDirection = undefined;
    let scrollAmount = (scrollTop / (scrollHeight-windowHeight)) * 100; // get amount scrolled (in %)

    this.setState(prevState => {
      return {
        scroll: scrollAmount
      }
    })

    if (this.state.scroll > 84 && this.state.scroll < 85){
      this.setState(
        {locked: true}
      )
      this.disableScroll();
      // if (scrollAmount > this.state.scroll + 5 && this.state.activeFeature < 2) {
      //   scrollDirection = "BIG down";
      //   this.setState(prevState => {
      //     return {
      //       activeFeature: prevState.activeFeature + 1 
      //     }
      //   })
      //   console.log(scrollDirection);
      //   console.log(this.state.activeFeature)
  
      // } else if (scrollAmount < this.state.scroll - 5 && this.state.activeFeature > 0) {
      //   scrollDirection = "BIG up";
      //   this.setState(prevState => {
      //     return {
      //       activeFeature: prevState.activeFeature - 1 
      //     }
      //   })
      //   console.log(scrollDirection);
      //   console.log(this.state.activeFeature)
      // }
      // return false;
    }

    console.log('page top', this.state.scroll);
  }

  render() {
    const features = this.state.featureData.map((feature) => {
      return <Feature key={feature.id} info={feature} scroll={this.state.scroll} active={this.state.active} />
    })

    return (
      <div className="App">
        <Landing />
        <div className="stickyContent">
          {features}
        </div>
        <footer></footer>
        <ParticleWrapper/>
      </div>
    );
  }
}

export default App;
