import React, { Component } from 'react';

export default class Volume extends Component {
  handleChange() {
    console.log('handle range slide');
  }

  render() {
    return (
      <div className="row volume-container">
        <input
          type="range"
          min="1"
          max="100"
          value="50"
          className="range"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
