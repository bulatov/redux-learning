import { connect } from 'react-redux';
import TreatmentInput from '../components/TreatmentInput';
import { changeTreatment } from '../actions';

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (text, id) => dispatch(changeTreatment(text, id))
  };
};

const TreatmentInputContainer = connect(
  undefined,
  mapDispatchToProps
)(TreatmentInput);

export default TreatmentInputContainer;
