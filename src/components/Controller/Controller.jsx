import React, { Component } from 'react';
import Switch from './../Switch/Switch';
import Display from './../Display/Display';
import Volume from './../Volume/Volume';

export default class Controller extends Component {
  render() {
    return (
      <div className="controller-container">
        <Switch />
        <Display />
        <Volume />
      </div>
    );
  }
}
