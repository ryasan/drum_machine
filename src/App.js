import React, { Component } from 'react';
import Controller from './components/Controller/Controller';
import DrumPadBank from './components/DrumPadBank/DrumPadBank';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="wrap">
        <div id="drum-machine">
          <DrumPadBank />
          <Controller />
        </div>
        <div className="side" />
        <div className="bottom" />
      </div>
    );
  }
}

export default App;
