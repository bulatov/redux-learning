import { combineReducers } from 'redux';
import patients from './patients.js';

const hospitalApp = combineReducers({
  patients
});

export default hospitalApp;
