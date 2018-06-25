import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { displaySoundAction } from './../../store';
import DrumPad from './../DrumPad/DrumPad';
import { DRUMPADS, DRUMCODES } from './DrumPads';

class DrumPadBank extends Component {
  constructor() {
    super();
    this.state = {
      activePad: ''
    };
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.playSound = this.playSound.bind(this);
  }

  componentDidMount() {
    findDOMNode(this.refs.drumArea).focus(); // set focus on drum area
  }

  playSound(id, title) {
    const sound = document.getElementById(id);
    sound.currentTime = 0;
    sound.play();
    this.setActiveDrumPad(id);
    this.showSound(title);
  }

  showSound(title) {
    this.props.displaySoundAction(title);
  }

  setActiveDrumPad(pad) {
    this.setState({ activePad: pad });
    setTimeout(() => this.setState({ activePad: '' }), 100);
  }

  handleKeyDown(e) {
    const id = String.fromCharCode(e.keyCode);
    DRUMCODES[id]
      ? this.playSound(id, DRUMCODES[id])
      : this.setActiveDrumPad('');
  }

  render() {
    return (
      <div
        className="drum-pad-bank"
        onKeyDown={this.handleKeyDown}
        ref="drumArea"
        tabIndex="0"
      >
        {DRUMPADS.map((drumPad, i) => (
          <DrumPad
            key={drumPad.keyTrigger}
            drumPad={drumPad}
            activePad={this.state.activePad}
            onPlaySound={this.playSound}
          />
        ))}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ displaySoundAction }, dispatch);
};

export default connect(
  null,
  mapDispatchToProps
)(DrumPadBank);
