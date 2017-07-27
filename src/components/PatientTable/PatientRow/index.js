import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PatientCell from '../PatientCell';
import './styles.scss';

export default class PatientRow extends Component {

  get fields() {
    return ['firstName', 'secondName', 'age', 'gender', 'disease', 'treatment', 'status'];
  }

  render() {
    const $rowCells = this.fields.map(field => {
      return <PatientCell key={field} field={field} patient={this.props.patient} />;
    });

    return (
      <tr className="patient-table__patient-row">
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
