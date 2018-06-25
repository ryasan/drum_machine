import React, { Component } from 'react';
import './Switch.css';

export default class Switch extends Component {
  constructor() {
    super();
    this.state = {
      powerOn: true
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange() {
    this.setState({ powerOn: !this.state.powerOn });
  }

  render() {
    return (
      <div className="row switch-container">
        <div className="switch-title">power</div>
        <label className="switch">
          <input
            type="checkbox"
            checked={this.state.powerOn}
            onChange={this.handleInputChange}
          />
          <span className="slider" />
        </label>
      </div>
    );
  }
}
