import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Clock from './components/Clock';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Brick's Usless Website</h2>
        </div>
        <Clock num={1}/>
        <Clock num={2}/>
        <Clock num={3}/>
      </div>
    );
  }
}

export default App;
