import React from 'react';
import PropTypes from 'prop-types';
import PatientRow from './PatientRow';

export default class PatientTable extends React.Component {
  constructor() {
    super();

    this.captions = [
      'Name',
      'Surname',
      'Age',
      'Gender',
      'Disease',
      'Treatment',
      'Status'
    ];
  }
  render() {
    const $headers = this.captions.map((key) => { return <th key={key}>{key}</th>; });
    const $rows = [];
    for (let i = 0; i < this.props.patients.length; i++) {
      const patient = this.props.patients[i];
      $rows.push(<PatientRow patient={patient} key={patient.firstName + patient.secondName} />);
    }
    return (
      <table>
        <thead>
          <tr>
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
  patients: PropTypes.array
};
