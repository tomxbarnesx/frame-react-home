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
      activeFeature: 0,
      scroll: 0,
      delta: 0
    }
    this.handleScroll = this.handleScroll.bind(this)
    this.disableScroll = this.disableScroll.bind(this)
    this.MouseWheelHandler = this.MouseWheelHandler.bind(this)
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
    let direction = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)))
    if (this.state.delta <= 2 && this.state.delta >= 0){
      this.setState(prevState => {
        if ((prevState.delta === 0 && direction === 1) || (prevState.delta === 2 && direction === -1) || prevState.delta === 1) {
          return {
            delta: prevState.delta + direction
          }
        }
      })
    }
    console.log("DELTA", this.state.delta)
    // if (this.state)
    // this.setState(prevState => {
    //   return {
    //     activeFeature: prevState.activeFeature + 1 
    //   }
    // })
    e.preventDefault()
    return false;
  }

  handleScroll() {
    const scrollHeight = document.body.scrollHeight;
    const windowHeight = window.innerHeight
    const scrollTop = window.scrollY;
    let scrollDirection = undefined;
    let scrollAmount = (scrollTop / (scrollHeight-windowHeight)) * 100; // get amount scrolled (in %)

    if (scrollAmount > 32.5){
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

    this.setState(prevState => {
      return {
        scroll: scrollAmount
      }
    })

    console.log('page top', this.state.scroll);
  }

  render() {
    const features = this.state.featureData.map((feature) => {
      return <Feature key={feature.id} info={feature} scroll={this.state.scroll} active={this.state.delta} />
    })

    return (
      <div className="App">
        <Landing />
        <div className="stickyContainer">
          {features}
        </div>
        <footer></footer>
        <ParticleWrapper/>
      </div>
    );
  }
}

export default App;
