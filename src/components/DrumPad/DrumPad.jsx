import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { displaySoundAction } from './../../store';
import './DrumPad.css'

class DrumPad extends Component {
  constructor() {
    super();
    this.state = {
      active: false
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.playSound = this.playSound.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  playSound(displayTitle, id = null) {
    const sound = document.getElementById(id);
    sound.currentTime = 0;
    sound.play();
    this.setActiveDrumPad(id);
    this.showSoundOnDisplay(displayTitle);
  }

  setActiveDrumPad(keyTrigger) {
    this.setState({ active: !this.state.active });
    setTimeout(() => this.setState({ active: false }), 100);
  }

  showSoundOnDisplay(displayTitle) {
    this.props.displaySoundAction(displayTitle);
  }

  handleKeyPress(e) {
    const { title, keyTrigger } = this.props.drumPad;
    if (String.fromCharCode(e.keyCode) === keyTrigger) {
      this.playSound(title, keyTrigger);
    }
  }

  render() {
    const { powerOn, drumPad } = this.props;

    return (
      <div
        className={
          this.state.active
            ? `${powerOn ? 'drum-pad active' : 'drum-pad inactive'}`
            : 'drum-pad'
        }
        id={drumPad.title}
        onClick={() => this.playSound(drumPad.title, drumPad.keyTrigger)}
      >
        {drumPad.keyTrigger}
        <audio
          id={drumPad.keyTrigger}
          src={powerOn ? drumPad.url : '#'}
          className={'clip'}
          type="audio/wav"
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    powerOn: state.powerOn
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ displaySoundAction }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DrumPad);
