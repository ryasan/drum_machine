import React, { Component } from 'react';

export default class DrumPadItem extends Component {
  playSound(id) {
    const sound = document.getElementById(id);
    sound.currentTime = 0;
    sound.play();
  }

  render() {
    const { keyTrigger, url } = this.props.drumPad;
    return (
      <div className="drum-pad" onClick={() => this.playSound(keyTrigger)}>
        {keyTrigger}
        <audio id={keyTrigger}>
          <source src={url} type="audio/wav" />
        </audio>
      </div>
    );
  }
}
