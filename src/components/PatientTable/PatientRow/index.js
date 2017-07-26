import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TreatmentInputContainer from '../../../containers/TreatmentInputContainer';
import StatusDropDown from '../../StatusDropDown';

export default class PatientRow extends Component {

  get contentType() {
    return {
      firstName: 'value',
      secondName: 'value',
      age: 'value',
      gender: 'value',
      disease: 'value',
      treatment: 'input',
      status: 'dropdown'
    };
  }

  createCellContent(key, patient) {
    switch (this.contentType[key]) {
      case 'value':
        return patient[key];
      case 'input':
        return <TreatmentInputContainer id={patient.id} defaultValue={patient[key]} />;
      case 'dropdown':
        return <StatusDropDown defaultValue={patient[key]} />;
      default:
        return null;
    }
  }

  render() {
    const keys = Object.keys(this.contentType);
    const $rowCells = keys.map(key => {
      return (
        <td key={key}>
          {this.createCellContent(key, this.props.patient)}
        </td>
      );
    });

    return (
      <tr>
        {$rowCells}
      </tr>
    );
  }
}

PatientRow.propTypes = {
  patient: PropTypes.shape({
    firstName: PropTypes.String,
    secondName: PropTypes.String,
    age: PropTypes.Number,
    gender: PropTypes.Number,
    disease: PropTypes.String,
    treatment: PropTypes.String,
    status: PropTypes.String
  }).isRequired
};
