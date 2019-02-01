import React, { Component } from 'react';

import './App.css';
import featureData from './data/features';


import Landing from './components/Landing';
import Feature from './components/Feature';
// import AltFeature from './components/AltFeature';
import Particles from 'react-particles-js';


class App extends Component {
  constructor() {
    super();
    this.state = {
      featureData: featureData,
      activeFeature: 0,
      scroll: 0
    }
    this.handleScroll = this.handleScroll.bind(this)
    // this.handleChange = this.handleChange.bind(this)
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

  handleScroll() {
    const scrollHeight = document.body.scrollHeight;
    const windowHeight = window.innerHeight
    const top = this.top;
    const scrollTop = window.scrollY;
    let scrollAmount = (scrollTop / (scrollHeight-windowHeight)) * 100 // get amount scrolled (in %)
    this.setState(prevState => {
      return {
        scroll: scrollAmount
      }
    })
    console.log('page top', scrollAmount);

    if (scrollAmount < 25) {
      this.setState(prevState => {
        return {
          activeFeature: 0
        }
      })
    }
    if (scrollAmount > 25) {
      setTimeout(
        function() {
          this.setState(prevState => {
            return {
              activeFeature: 1
            }
          })
        }
        .bind(this), 
        200
      )
    }
    if (scrollAmount > 45) {
      setTimeout(
        function() {
          this.setState(prevState => {
            return {
              activeFeature: 2
            }
          })
        }
        .bind(this), 
        200
      )
    }
  }
  // handleChange() {
  //   if (this.state.scroll > 25) {
  //     this.setState(prevState => {
  //         return {
  //             active: 1
  //         }
  //     })
  //   }
  //   console.log("FIRING!")
  // }

  render() {
    return (
      <div className="App">
        <Landing />
        <div className="stickyContainer">
          <Feature scroll={this.state.scroll} info={this.state.featureData} active={this.state.activeFeature}/>
        </div>
        <footer></footer>
        <Particles 
        className="particleScreen"
        params={{
          "particles": {
            "number": {
              "value": 165,
              "density": {
                "enable": true,
                "value_area": 800
              }
            },
            "color": {
              "value": "#ffffff"
            },
            "shape": {
              "type": "circle",
              "stroke": {
                "width": 0,
                "color": "#000000"
              },
              "polygon": {
                "nb_sides": 5
              },
              "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
              }
            },
            "opacity": {
              "value": .6,
              "random": true,
              "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0,
                "sync": false
              }
            },
            "size": {
              "value": 1,
              "random": true,
              "anim": {
                "enable": false,
                "speed": 4,
                "size_min": 0.3,
                "sync": false
              }
            },
            "line_linked": {
              "enable": false,
              "distance": 150,
              "color": "#ffffff",
              "opacity": 0.4,
              "width": 1
            },
            "move": {
              "enable": true,
              "speed": 1,
              "direction": "none",
              "random": true,
              "straight": false,
              "out_mode": "out",
              "bounce": false,
              "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 600
              }
            }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": {
                "enable": false,
                "mode": "bubble"
              },
              "onclick": {
                "enable": true,
                "mode": "repulse"
              },
              "resize": true
            },
            "modes": {
              "grab": {
                "distance": 400,
                "line_linked": {
                  "opacity": 1
                }
              },
              "bubble": {
                "distance": 250,
                "size": 0,
                "duration": 2,
                "opacity": 0,
                "speed": 3
              },
              "repulse": {
                "distance": 178.6569867062961,
                "duration": 0.4
              },
              "push": {
                "particles_nb": 4
              },
              "remove": {
                "particles_nb": 2
              }
            }
          },
          "retina_detect": true
        }} />
      </div>
    );
  }
}

export default App;
