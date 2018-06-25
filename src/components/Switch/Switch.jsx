import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { powerOnAction, displaySoundAction } from './../../store';
import './Switch.css';

class Switch extends Component {
  constructor() {
    super();
    this.state = {
      powerOn: true
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange() {
    this.setState({ powerOn: !this.state.powerOn }, () =>
      this.props.powerOnAction(!this.props.powerOn)
    );
  }

  render() {
    return (
      <div className="row switch-container">
        <div className="inner">
          <div className="title">Power</div>
          <label className="switch">
            <input
              type="checkbox"
              checked={this.state.powerOn}
              onChange={this.handleInputChange.bind(this)}
            />
            <span className="slider" />
          </label>
        </div>
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
  return bindActionCreators({ powerOnAction, displaySoundAction }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Switch);
