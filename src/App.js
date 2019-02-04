import React, { Component } from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';

import Home from './components/Home';
import Nav from './components/Nav';
import SignUp from './components/SignUp';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/sign-up" component={SignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
