import { CHANGE_TREATMENT, CHANGE_STATUS } from '../actions';

const patient = (state = {}, action) => {
  if (state.id !== action.id) {
    return state;
  }

  const key = (action.type === CHANGE_TREATMENT ? 'treatment' : 'status');
  return {
    ...state,
    [key]: action.text
  };
};

const patients = (state = [], action) => {
  switch (action.type) {
    case CHANGE_TREATMENT:
    case CHANGE_STATUS:
      return state.map(elem => patient(elem, action));
    default:
      return state;
  }
};

export default patients;
