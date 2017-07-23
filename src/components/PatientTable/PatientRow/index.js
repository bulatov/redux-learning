import React from 'react';
import PropTypes from 'prop-types';

export default class PatientRow extends React.Component {
  render() {
    const patient = this.props.patient;
    const $rowCells = [];
    for (let key in patient) {
      if (patient.hasOwnProperty(key)) {
        $rowCells.push(<td key={key}>{patient[key]}</td>);
      }
    }

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
    status: PropTypes.String,

    map: PropTypes.function
  })
};
