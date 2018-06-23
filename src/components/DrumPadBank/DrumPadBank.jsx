import React, { Component, Fragment } from 'react';
import DrumPadItem from './../DrumPadItem/DrumPadItem';
import { DRUMPADS } from './DrumPads';

export default class DrumPadBank extends Component {
  render() {
    return (
      <Fragment>
        {DRUMPADS.map(drumPad => (
          <DrumPadItem key={drumPad.keyTrigger} drumPad={drumPad} />
        ))}
      </Fragment>
    );
  }
}
