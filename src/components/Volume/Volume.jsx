import React, { Component } from 'react';
import './Volume.css';

export default class Volume extends Component {
  constructor() {
    super();
    this.state = {
      value: 50
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
    const clips = [...document.getElementsByClassName('clip')];
    clips.forEach(clip => (clip.volume = e.target.value * 0.01));
  }

  render() {
    return (
      <div className="row volume-container">
        <input
          type="range"
          min="1"
          max="100"
          step="1"
          value={this.state.value}
          className="slider"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
