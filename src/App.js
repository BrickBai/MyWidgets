import React, { Component } from 'react';
import './App.css';
import IdeasContainer from './components/IdeasContainer'

import Clock from './components/Clock';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>My Widgets in construction</h2>
        </div>
        <div className="App-row">
        <Clock num={1}/>
        </div>
        <div className="App-row">
          <IdeasContainer />
        </div>
      </div>
    );
  }
}

export default App;
