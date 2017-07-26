import { CHANGE_TREATMENT, CHANGE_STATUS } from '../actions';

const patient = (state = {}, action) => {
  if (state.id !== action.id) {
    return state;
  }

  const key = (CHANGE_TREATMENT ? 'treatment' : 'status');
  return Object.assign({}, state, {
    [key]: action.text
  });
};

const patients = (state = [], action) => {
  switch (action.type) {
    case CHANGE_TREATMENT:
    case CHANGE_STATUS:
      return state.map(elem => {
        return patient(elem, action);
      });
    default:
      return state;
  }
};

export default patients;
