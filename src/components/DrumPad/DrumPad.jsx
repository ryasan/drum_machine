import React, { Component } from 'react';

export default class DrumPad extends Component {
  render() {
    const { title, keyTrigger, url } = this.props.drumPad;
    const classes = this.props.activePad === keyTrigger ? 'drum-pad active' : 'drum-pad';
    return (
      <div
        className={classes}
        onClick={() => this.props.onPlaySound(keyTrigger, title)}
      >
        {keyTrigger}
        <audio id={keyTrigger} className="clip">
          <source src={url} type="audio/wav" />
        </audio>
      </div>
    );
  }
}
