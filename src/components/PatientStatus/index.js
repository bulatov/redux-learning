import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class StatusDropdown extends Component {

  handleChange(event) {
    this.props.onChange(event.target.value, this.props.id);
 }

  render() {
    return (
      <select defaultValue={this.props.defaultValue} onChange={this.handleChange.bind(this)}>
        <option value="admit">Admit</option>
        <option value="operation">Operation</option>
        <option value="recovery">Recovery</option>
        <option value="death">Death</option>
      </select>
    );
  }
}


StatusDropdown.propTypes = {
  onChange: PropTypes.func,
  id: PropTypes.number,
  defaultValue: PropTypes.string
};
