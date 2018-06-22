import React, { Component } from 'react';
import './DrumPad.css';

export default class DrumPad extends Component {
  render() {
    const { title, trigger, audioUrl } = this.props;
    return (
      <div className="drum-pad" onClick={this.props.onPlaySound}>
        {title + ' ' + trigger}
        <audio src={audioUrl} id={trigger} />
      </div>
    );
  }
}
