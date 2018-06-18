import React, { Component } from 'react';

export default class DrumPad extends Component {
  render() {
    const { id, title, audioUrl } = this.props;
    return (
      <div id={id} className="drum-pad">
        {title}
        <audio src={audioUrl} controls />
      </div>
    );
  }
}
