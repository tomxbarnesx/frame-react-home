(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/cal.9a7ecac4.png"},,,,,function(e,t,a){},,function(e,t,a){e.exports=a.p+"static/media/whiteLogo.8ade99bc.png"},function(e,t,a){e.exports=a.p+"static/media/downArrow.4fe9c605.png"},function(e,t,a){e.exports=a.p+"static/media/report.c998808c.png"},function(e,t,a){e.exports=a.p+"static/media/interactive.b932079b.png"},function(e,t,a){e.exports=a.p+"static/media/iPhoneBlankScreen.b8b07822.png"},function(e,t,a){e.exports=a.p+"static/media/Fentanyl_Intro.0c330e58.mp4"},function(e,t,a){e.exports=a.p+"static/media/RP5.d467df6a.mp4"},function(e,t,a){e.exports=a.p+"static/media/RP4.4906489a.mp4"},,function(e,t,a){e.exports=a.p+"static/media/text.41ff2648.png"},,function(e,t,a){e.exports=a(49)},,,,,,function(e,t,a){},,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,,function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(17),c=a.n(l),r=a(51),o=(a(35),a(6)),s=a(7),u=a(9),d=a(8),m=a(10),h=a(53),v=a(52),p=a(2),f=a(50),E=[{id:1,header:"Deeply reported narratives",sub:"Every week, a riveting, human story that exposes the underlying forces driving the news",vid:"../video/Fentanyl_Intro.mp4",position:"left"},{id:2,header:"Immersive, interactive",sub:"Interactive features give viewers agency to choose their own paths through the story",vid:"../video/RP5.mp4",position:"right"},{id:3,header:"Delivered to your digital doorstep",sub:"Creative distribution methods with email, text and calendar keep our stories close.",vid:"../video/RP4.mp4",position:"left"}],g=a(18),b=a.n(g),S=a(19),N=a.n(S),w=function(e){var t;return t=0===e.active?"slide active":"slide",i.a.createElement("div",{className:t},i.a.createElement("div",{className:"logoContainer"},i.a.createElement("img",{className:"centerLogo",src:b.a,alt:"Frame logo"}),i.a.createElement("div",{className:"logoBreak"}),i.a.createElement("div",{className:"logoSub"},i.a.createElement("h2",{className:"logoH2"},"A NEWS MAGAZINE FOR THIS CENTURY"))),i.a.createElement("div",{className:"landingButtons"},i.a.createElement("a",null,i.a.createElement("div",{className:"signUpButton"},i.a.createElement("strong",null,"SIGN UP FREE OUR INAUGURAL MONTH"))),i.a.createElement("a",null,i.a.createElement("div",{className:"signUpButton"},i.a.createElement("strong",null,"BECOME A FOUNDING SUBSCRIBER")))),i.a.createElement("div",{className:"downPoint"},i.a.createElement("img",{src:N.a,width:"100%",alt:"down scroll"})))},O=(a(16),a(20)),y=a.n(O),j=a(21),k=a.n(j),I=a(11),x=a.n(I),M=function(e){var t,a,n,l=[y.a,k.a,x.a];return e.active===e.info.id&&"left"===e.info.position?(t="featureSection fadeInSwipeLeft",a="featureHeader fadeInSwipeLeft",n="featureSub fadeInSwipeLeft"):e.active===e.info.id&&"right"===e.info.position?(t="featureSection fadeInSwipeRight",a="featureHeader reverse fadeInSwipeRight",n="featureSub fadeInSwipeRight"):(t="featureSection",a="featureHeader fadeOut",n="featureSub fadeOut"),i.a.createElement("div",{className:t},i.a.createElement("div",{className:a},i.a.createElement("div",{className:"iconContainer"},i.a.createElement("img",{src:l[e.active-1],width:"70px",alt:"Deeply reported icon. Search Document by Juicy Fish from the Noun Project"})),i.a.createElement("div",{className:"featureHeaderText"},i.a.createElement("h2",{className:"featureTitle"},e.info.header))),i.a.createElement("div",{className:n},i.a.createElement("p",null,e.info.sub)))},C=a(22),R=a.n(C),D=a(23),L=a.n(D),H=a(24),T=a.n(H),U=a(25),P=a.n(U),B=function(e){var t="phone",a=[L.a,T.a,P.a];return 4===e.active?setTimeout(function(){t="phone"},1e3):t="phone fadeInSwipeLeft",i.a.createElement("div",{className:t},i.a.createElement("img",{className:"phoneImg",src:R.a,alt:"iPhone graphic",width:"60%"}),i.a.createElement("video",{className:"demoVid",alt:"introVideo",width:"57%",autoPlay:!0,muted:!0,playsInline:!0,src:a[e.active-1],type:"video/mp4"}))},A=a(26),F=a.n(A),W=(n.Component,function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).state={featureData:E,active:0,scroll:0,delta:0,percentage:0,dragStart:null,locked:!0},e.disableScroll=e.disableScroll.bind(Object(p.a)(Object(p.a)(e))),e.MouseWheelHandler=e.MouseWheelHandler.bind(Object(p.a)(Object(p.a)(e))),e.nextSlide=e.nextSlide.bind(Object(p.a)(Object(p.a)(e))),e.prevSlide=e.prevSlide.bind(Object(p.a)(Object(p.a)(e))),e.showSlide=e.showSlide.bind(Object(p.a)(Object(p.a)(e))),e.touchStart=e.touchStart.bind(Object(p.a)(Object(p.a)(e))),e.touchMove=e.touchMove.bind(Object(p.a)(Object(p.a)(e))),e.touchEnd=e.touchEnd.bind(Object(p.a)(Object(p.a)(e))),e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.disableScroll()}},{key:"componentWillUnmount",value:function(){this.disableScroll()}},{key:"throttle",value:function(e,t){var a=Date.now();return function(){a+t-Date.now()<0&&(e(),a=Date.now())}}},{key:"disableScroll",value:function(){var e=document.getElementsByClassName("home")[0];e.addEventListener("mousewheel",this.MouseWheelHandler,!0),e.addEventListener("DOMMouseScroll",this.MouseWheelHandler,!0),e.addEventListener("touchstart",this.touchStart,!1),e.addEventListener("touchmove",this.touchMove,!1),e.addEventListener("touchend",this.touchEnd,!1)}},{key:"MouseWheelHandler",value:function(e){e=window.event||e;var t=Math.max(-1,Math.min(1,e.wheelDelta||-e.detail));return console.log("DELTA",this.state.delta),t>0?(this.setState(function(e){return{delta:e.delta-1}}),Math.abs(this.state.delta)>=35&&this.prevSlide()):(this.setState(function(e){return{delta:e.delta+1}}),Math.abs(this.state.delta)>=35&&this.nextSlide()),e.preventDefault(),!1}},{key:"prevSlide",value:function(){console.log("PREVIOUS"),this.state.active>0&&this.setState(function(e){return{active:e.active-1}}),this.showSlide()}},{key:"nextSlide",value:function(){console.log("NEXT"),this.setState(function(e){return{active:e.active+1}}),this.showSlide()}},{key:"showSlide",value:function(){console.log("ACTIVE",this.state.active),this.setState({delta:0})}},{key:"touchStart",value:function(e){null===this.state.dragStart&&(console.log("TOUCH START INIT"),this.setState({dragStart:e.touches[0].clientY}),console.log(this.state.dragStart))}},{key:"touchMove",value:function(e){var t=this;if(null!==this.state.dragStart)return this.setState(function(a){return{delta:t.state.dragStart-e.touches[0].clientY,percentage:t.state.delta/window.innerHeight}}),console.log(this.state.percentage),!0===this.state.locked?(e.preventDefault(),!1):void 0}},{key:"touchEnd",value:function(){this.setState({dragStart:null}),this.state.percentage>=.15?this.nextSlide():Math.abs(this.state.percentage)>=.15?this.prevSlide():this.showSlide(),this.setState({percentage:0})}},{key:"render",value:function(){var e,t=this,a="slide";this.state.active>0&&this.state.active<4?e="slide active":this.state.active>3?a="slide active":e="slide";var n=this.state.featureData.map(function(e){return i.a.createElement(M,{key:e.id,info:e,scroll:t.state.scroll,active:t.state.active})});return i.a.createElement("div",{className:"home"},i.a.createElement(w,{active:this.state.active}),i.a.createElement("div",{className:e},n,i.a.createElement(B,{scroll:this.state.scroll,active:this.state.active})),i.a.createElement("footer",{className:a},i.a.createElement("div",{className:"footerInfoContainer"},i.a.createElement("h2",null,"Experience the future of the magazine."),i.a.createElement("p",null,"Sign up for free our inaugural month."),i.a.createElement(f.a,{to:"/sign-up"},i.a.createElement("button",{className:"buttonStyle"},"Sign up")))))}}]),t}(n.Component)),G=(a(40),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).state={open:!1},e.handleClick=e.handleClick.bind(Object(p.a)(Object(p.a)(e))),e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"handleClick",value:function(){!1===this.state.open?this.setState({open:!0}):this.setState({open:!1}),console.log(this.state.open)}},{key:"render",value:function(){var e,t,a,n;return!1===this.state.open?(e="hamb top",t="hamb middle",a={display:"none"},n="bg-cover"):(e="hamb top rotate",t="hamb middle rotate-back",a={display:"block"},n="bg-cover reveal"),i.a.createElement("div",{className:"button_container",id:"toggle"},i.a.createElement("div",{className:n}),i.a.createElement("div",{className:"hamburger-shell",onClick:this.handleClick},i.a.createElement("div",{className:e}),i.a.createElement("div",{className:t}),i.a.createElement("ul",{id:"menu",style:a},i.a.createElement(f.a,{to:"/frame-react-home"},i.a.createElement("li",null,"Home")),i.a.createElement(f.a,{to:"/sign-up"},i.a.createElement("li",null,"Sign up")),i.a.createElement(f.a,{to:"/log-in"},i.a.createElement("li",null,"Log in")))))}}]),t}(n.Component)),V=(a(42),a(27)),Y=a.n(V),J=(a(44),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).state={open:!1,active:null},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"deliveryMaster"},i.a.createElement("h2",null,"DELIVERY OPTIONS"),i.a.createElement("div",{className:"deliveryIconContainer"},i.a.createElement("div",{className:"deliveryIcon active"},i.a.createElement("img",{src:x.a,alt:"Select calendar",width:"100%"})),i.a.createElement("div",{className:"deliveryIcon"},i.a.createElement("img",{src:Y.a,alt:"Select text",width:"100%"})),i.a.createElement("div",{className:"deliveryIcon"})),i.a.createElement("div",{className:"connector"}),i.a.createElement("div",{className:"optionsBox"}," "))}}]),t}(n.Component)),_=function(){return i.a.createElement("div",{className:"signUpMaster"},i.a.createElement("h1",null,"SIGN UP"),i.a.createElement("p",null,"Recieve weekly issues for $5 a month.",i.a.createElement("br",null),"Free during our inaugural month."),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",null,i.a.createElement("strong",null,"First Name")),i.a.createElement("input",{className:"form-control",placeholder:"Enter first name"})),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",null,i.a.createElement("strong",null,"Last Name")),i.a.createElement("input",{className:"form-control",placeholder:"Enter first name"})),i.a.createElement(J,null))},$=(a(46),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(G,null),i.a.createElement(h.a,null,i.a.createElement(v.a,{exact:!0,path:"/frame-react-home",component:W}),i.a.createElement(v.a,{path:"/sign-up",component:_})))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(r.a,null,i.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[29,2,1]]]);
//# sourceMappingURL=main.a3f245fc.chunk.js.map