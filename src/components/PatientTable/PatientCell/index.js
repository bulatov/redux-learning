import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PatientTreatmentContainer from '../../../containers/PatientTreatmentContainer';
import PatientStatusContainer from '../../../containers/PatientStatusContainer';
import './styles.scss';

export default class PatientCell extends Component {

  createCellContent(field, patient) {
    switch (field) {
      case 'treatment':
        return <PatientTreatmentContainer id={patient.id} value={patient[field]} />;
      case 'status':
        return <PatientStatusContainer id={patient.id} value={patient[field]} />;
      default:
        return patient[field];
    }
  }

  render() {
    return (
      <td className="patient-table__patient-cell">
        {this.createCellContent(this.props.field, this.props.patient)}
      </td>
    );
  }
}

PatientCell.propTypes = {
  patient: PropTypes.object.isRequired,
  field: PropTypes.string.isRequired
};
