import { connect } from 'react-redux';
import PatientStatus from '../components/PatientStatus';
import { changeStatus } from '../actions';

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (text, id) => dispatch(changeStatus(text, id))
  };
};

const StatusDropdownContainer = connect(
  undefined,
  mapDispatchToProps
)(PatientStatus);

export default StatusDropdownContainer;
