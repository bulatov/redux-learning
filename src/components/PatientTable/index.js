import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PatientRow from './PatientRow';
import './style.scss';

export default class PatientTable extends Component {

  get captions() {
      return [
        'Name', 'Surname', 'Age', 'Gender', 'Disease', 'Treatment', 'Status'
      ];
  }

  render() {
    const $headers = this.captions.map(key => <th key={key}>{key}</th>);
    const $rows = this.props.patients.map(patient => <PatientRow patient={patient} key={patient.id} />);

    return (
      <table className="patient-table">
        <thead>
          <tr className="patient-table__header-row">
            {$headers}
          </tr>
        </thead>
        <tbody>
          {$rows}
        </tbody>
      </table>
    );
  }
}

PatientTable.propTypes = {
  patients: PropTypes.array.isRequired
};
