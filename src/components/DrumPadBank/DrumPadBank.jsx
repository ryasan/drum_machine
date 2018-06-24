import React, { Component } from 'react';
import DrumPad from './DrumPad';
import { DRUMPADS } from './DrumPads';
import './DrumPadBank.css';
export default class DrumPadBank extends Component {
  render() {
    return (
      <div className="drum-pad-bank">
        {DRUMPADS.map(drumPad => (
          <DrumPad key={drumPad.keyTrigger} drumPad={drumPad} />
        ))}
      </div>
    );
  }
}
