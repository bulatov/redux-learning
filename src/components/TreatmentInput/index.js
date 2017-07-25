import React from 'react';
import PropTypes from 'prop-types';

export default class TreatmentInput extends React.Component {

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
      <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)} />
    );
  }
}

TreatmentInput.propTypes = {
  defaultValue: PropTypes.string
};
