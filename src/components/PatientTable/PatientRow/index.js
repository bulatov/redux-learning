import React from 'react';
import PropTypes from 'prop-types';
import TreatmentInput from '../../TreatmentInput';
import StatusDropDown from '../../StatusDropDown';

export default class PatientRow extends React.Component {

  getContentType(key) {
    return this.props.contentType[key];
  }

  createCellContent(key, patient) {
    let content = null;

    switch (this.getContentType(key)) {
      case 'value': content = patient[key]; break;
      case 'input': content = <TreatmentInput defaultValue={patient[key]} />; break;
      case 'dropdown': content = <StatusDropDown defaultValue={patient[key]} />; break;
      default: content = patient[key]; break;
    }

    return content;
  }

  render() {
    const patient = this.props.patient;
    const $rowCells = [];
    for (let key in patient) {
      if (patient.hasOwnProperty(key)) {

        $rowCells.push(<td key={key}>{this.createCellContent(key, patient)}</td>);
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
  contentType: PropTypes.object,
  patient: PropTypes.shape({
    firstName: PropTypes.String,
    secondName: PropTypes.String,
    age: PropTypes.Number,
    gender: PropTypes.Number,
    disease: PropTypes.String,
    treatment: PropTypes.String,
    status: PropTypes.String
  })
};
