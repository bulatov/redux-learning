import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PatientTreatmentContainer from '../../../containers/PatientTreatmentContainer';
import PatientStatusContainer from '../../../containers/PatientStatusContainer';

export default class PatientRow extends Component {

  get fields() {
    return ['firstName', 'secondName', 'age', 'gender', 'disease', 'treatment', 'status'];
  }

  createCellContent(field, patient) {
    switch (field) {
      case 'treatment':
        return <PatientTreatmentContainer id={patient.id} defaultValue={patient[field]} />;
      case 'status':
        return <PatientStatusContainer id={patient.id} defaultValue={patient[field]} />;
      default:
        return patient[field];
    }
  }

  render() {
    const $rowCells = this.fields.map(field => {
      return (
        <td key={field}>
          {this.createCellContent(field, this.props.patient)}
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
