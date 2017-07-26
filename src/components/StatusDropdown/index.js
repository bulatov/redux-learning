import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class StatusDropdown extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: this.props.defaultValue
    };
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
 }

  render() {
    return (
      <select value={this.state.value} onChange={this.handleChange.bind(this)}>
        <option value="admit">Admit</option>
        <option value="operation">Operation</option>
        <option value="recovery">Recovery</option>
        <option value="death">Death</option>
      </select>
    );
  }
}


StatusDropdown.propTypes = {
  defaultValue: PropTypes.string
};
