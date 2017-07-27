import React, { Component } from 'react';
import PatientTableContainer from '../../containers/PatientTableContainer.js';
import './styles.scss';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <PatientTableContainer />
      </div>
    );
  }
}
