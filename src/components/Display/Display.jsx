import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Display.css';

class Display extends Component {
  render() {
    return (
      <div className="row display-container">
        <div id="display">{this.props.soundDisplay || 'SOUND'}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    soundDisplay: state.soundDisplay
  };
};

export default connect(
  mapStateToProps,
  null
)(Display);
