import { connect } from 'react-redux';
import PatientTreatment from '../components/PatientTreatment';
import { changeTreatment } from '../actions';

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (text, id) => dispatch(changeTreatment(text, id))
  };
};

const TreatmentInputContainer = connect(
  undefined,
  mapDispatchToProps
)(PatientTreatment);

export default TreatmentInputContainer;
