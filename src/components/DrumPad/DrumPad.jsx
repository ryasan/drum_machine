import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { displaySoundAction } from './../../store';

class DrumPad extends Component {
  playSound(id, title) {
    const sound = document.getElementById(id);
    sound.currentTime = 0;
    sound.play();
    this.props.displaySoundAction(title);
  }

  render() {
    const { title, keyTrigger, url } = this.props.drumPad;
    return (
      <div className="drum-pad" onClick={() => this.playSound(keyTrigger, title)}>
        {keyTrigger}
        <audio id={keyTrigger} className="clip">
          <source src={url} type="audio/wav" />
        </audio>
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
)(DrumPad);
