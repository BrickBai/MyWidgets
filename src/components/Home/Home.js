import React, { Component } from 'react';
import './Home.css';
import IdeasContainer from '../IdeaBoard/IdeasContainer'
import Clock from '../Clock';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <div className="Home-header">
          <h2>My Widgets in construction \(^o^)/</h2>
        </div>
        <div className="Home-row">
        <Clock num={1}/>
        </div>
        <div className="Home-row">
          <IdeasContainer />
        </div>
      </div>
    );
  }
}

export default Home;
