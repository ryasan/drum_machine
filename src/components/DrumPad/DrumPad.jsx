import React, { Component } from 'react';
import './DrumPad.css'
export default class DrumPad extends Component {
  playSound() {}

  render() {
    const { title, trigger, audioUrl } = this.props;
    return (
      <div className="drum-pad">
        {title + ' ' + trigger}
        <audio src={audioUrl} id={trigger} />
      </div>
    );
  }
}
