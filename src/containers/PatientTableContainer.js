import { connect } from 'react-redux';
import PatientTable from '../components/PatientTable';

const mapStateToProps = (state) => {
  return {
    patients: state.patients
  };
};

const ShowPatientTable = connect(
  mapStateToProps
)(PatientTable);

export default ShowPatientTable;
