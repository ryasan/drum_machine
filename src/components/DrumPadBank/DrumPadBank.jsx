import React, { Component } from 'react';
import { connect } from 'react-redux';
import DrumPad from './../DrumPad/DrumPad';
import { DRUMPADS } from './DrumPads';
import './DrumPadBank.css'

class DrumPadBank extends Component {
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

const mapStateToProps = state => {
  return {
    powerOn: state.powerOn
  };
};

export default connect(
  mapStateToProps,
  null
)(DrumPadBank);
