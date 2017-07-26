import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TreatmentInput extends Component {

  handleChange(event) {
    this.props.onChange(event.target.value, this.props.id);
  }

  render() {
    return (
      <input type="text" value={this.props.value} onChange={this.handleChange.bind(this)} />
    );
  }
}

TreatmentInput.propTypes = {
  onChange: PropTypes.func,
  id: PropTypes.number,
  value: PropTypes.string
};
