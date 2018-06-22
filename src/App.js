import React, { Component } from 'react';
import Display from './components/Display/Display';
import DrumPad from './components/DrumPad/DrumPad';
import './App.css';
const drumPads = [
  {
    key: 'Q',
    title: 'clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  { key: 'W', title: 'hihat', url: './audio/hihat-808.wav' },
  { key: 'E', title: 'kick', url: './audio/kick-808.wav' },
  { key: 'A', title: 'openhat', url: './audio/openhat-808.wav' },
  { key: 'S', title: 'perc', url: './audio/perc-808.wav' },
  { key: 'D', title: 'ride acoustic', url: './audio/ride-acoustic01.wav' },
  { key: 'Z', title: 'shaker analog', url: './audio/shaker-analog.wav' },
  { key: 'X', title: 'snare', url: './audio/snare-808.wav' },
  { key: 'C', title: 'tom', url: './audio/tom-808.wav' }
];
class App extends Component {
  constructor() {
    super();
    this.handlePlaySound = this.handlePlaySound.bind(this);
  }

  handlePlaySound(e) {}

  render() {
    const PADS = drumPads.map((pad, i) => (
      <DrumPad
        key={i}
        trigger={pad.key}
        title={pad.title}
        url={pad.url}
        onPlaySound={this.handlePlaySound}
      />
    ));

    return (
      <div id="drum-machine">
        <div id="pads">{PADS}</div>
        <div id="controls">
          <Display />
        </div>
      </div>
    );
  }
}

export default App;
