import React, { Component } from 'react';
import Display from './components/Display/Display';
import DrumPadBank from './components/DrumPadBank/DrumPadBank';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="drum-machine">
        <div id="drum-pad-bank">
          <DrumPadBank />
        </div>
        <div id="controls">
          <Display />
        </div>
      </div>
    );
  }
}

export default App;
