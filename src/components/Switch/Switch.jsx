import React, { Component } from 'react';

export default class Switch extends Component {
  render() {
    return (
      <div className="row switch-container">
        <div className="switch">
          <label>
            power
            <input type="checkbox" />
          </label>
        </div>
      </div>
    );
  }
}
