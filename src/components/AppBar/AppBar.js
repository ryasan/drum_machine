import React from 'react';
import GH_ICON from './../../images/github.svg';
import './AppBar.css';

const AppBar = () => (
  <div className="app-bar">
    <a href="https://github.com/ryasan86/drum_machine" alt="drum_machine">
      <img src={GH_ICON} alt="github" className="icon" />
    </a>
  </div>
);

export default AppBar;
