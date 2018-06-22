import React, { Component } from 'react';
import Display from './components/Display/Display';
import DrumPad from './components/DrumPad/DrumPad';
import './App.css';
const drumPads = [
  { key: 'Q', title: 'clap', audioUrl: './audio/clap-808.wav' },
  { key: 'W', title: 'hihat', audioUrl: './audio/hihat-808.wav' },
  { key: 'E', title: 'kick', audioUrl: './audio/kick-808.wav' },
  { key: 'A', title: 'openhat', audioUrl: './audio/openhat-808.wav' },
  { key: 'S', title: 'perc', audioUrl: './audio/perc-808.wav' },
  { key: 'D', title: 'ride acoustic', audioUrl: './audio/ride-acoustic01.wav' },
  { key: 'Z', title: 'shaker analog', audioUrl: './audio/shaker-analog.wav' },
  { key: 'X', title: 'snare', audioUrl: './audio/snare-808.wav' },
  { key: 'C', title: 'tom', audioUrl: './audio/tom-808.wav' }
];
class App extends Component {
  render() {
    const PADS = drumPads.map((pad,i) => (
      <DrumPad
        key={i}
        trigger={pad.key}
        title={pad.title}
        audioUrl={pad.audioUrl}
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
