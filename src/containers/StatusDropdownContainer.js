import { connect } from 'react-redux';
import StatusDropdown from '../components/StatusDropdown';
import { changeStatus } from '../actions';

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (text, id) => dispatch(changeStatus(text, id))
  };
};

const StatusDropdownContainer = connect(
  undefined,
  mapDispatchToProps
)(StatusDropdown);

export default StatusDropdownContainer;
