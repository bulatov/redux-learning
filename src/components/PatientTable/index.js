import React from 'react';
import PropTypes from 'prop-types';
import PatientRow from './PatientRow';

export default class PatientTable extends React.Component {

  render() {
    const $headers = this.props.captions.map((key) => { return <th key={key}>{key}</th>; });
    const $rows = [];
    for (let i = 0; i < this.props.patients.length; i++) {
      const patient = this.props.patients[i];
      $rows.push(<PatientRow contentType={this.props.contentType} patient={patient} key={patient.firstName + patient.secondName} />);
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
  contentType: PropTypes.object,
  captions: PropTypes.array,
  patients: PropTypes.array
};
