import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import hospitalApp from './reducers';
import App from './components/App';

const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {
  patients: [
    {id: 0, firstName: 'Lewis', secondName: 'Farrell', age: 23, gender: 'Male', disease: 'Hemophilia', treatment: 'a', status: 'admit'},
    {id: 1, firstName: 'Freya', secondName: 'John', age: 40, gender: 'Female', disease: 'Bernard-Soulier Disease', treatment: 'b', status: 'recovery'},
    {id: 2, firstName: 'Sofia', secondName: 'Powell', age: 75, gender: 'Female', disease: 'Cardiac Catheterization', treatment: 'c', status: 'operation'},
    {id: 3, firstName: 'Jacob', secondName: 'Shaw', age: 21, gender: 'Male', disease: 'Deviated Septum', treatment: 'd', status: 'death'},
    {id: 4, firstName: 'Jessica', secondName: 'Faulkner', age: 74, gender: 'Female', disease: 'Ear Infection', treatment: 'e', status: 'admit'},
    {id: 5, firstName: 'Zara', secondName: 'Gibson', age: 61, gender: 'Female', disease: 'Farsightedness', treatment: 'f', status: 'recovery'},
    {id: 6, firstName: 'Archie', secondName: 'Howe', age: 20, gender: 'Male', disease: 'Gastritis', treatment: 'g', status: 'operation'},
    {id: 7, firstName: 'Ryan', secondName: 'Gregory', age: 78, gender: 'Male', disease: 'Head Injury', treatment: 'h', status: 'death'},
    {id: 8, firstName: 'Aaliyah', secondName: 'Sharpe', age: 55, gender: 'Female', disease: 'Infectious Mononucleosis', treatment: 'i', status: 'admit'},
    {id: 9, firstName: 'Jayden', secondName: 'Lloyd', age: 46, gender: 'Male', disease: 'Joint Injection ', treatment: 'j', status: 'operation'}
  ]
};

const store = createStore(hospitalApp, persistedState);

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

export default store;
