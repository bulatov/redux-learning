import React from 'react';
import PatientTable from '../PatientTable';

export default class Hospital extends React.Component {
  constructor() {
    super();

    this.patients = [
      {firstName: 'Lewis', secondName: 'Farrell', age: 23, gender: 'Male', disease: '', treatment: '', status: 'Admit'},
      {firstName: 'Freya', secondName: 'John', age: 40, gender: 'Female', disease: '', treatment: '', status: 'Recovery'},
      {firstName: 'Sofia', secondName: 'Powell', age: 75, gender: 'Female', disease: '', treatment: '', status: 'Operation'},
      {firstName: 'Jacob', secondName: 'Shaw', age: 21, gender: 'Male', disease: '', treatment: '', status: 'Death'},
      {firstName: 'Jessica', secondName: 'Faulkner', age: 74, gender: 'Female', disease: '', treatment: '', status: 'Admit'},
      {firstName: 'Zara', secondName: 'Gibson', age: 61, gender: 'Female', disease: '', treatment: '', status: 'Recovery'},
      {firstName: 'Archie', secondName: 'Howe', age: 20, gender: 'Male', disease: '', treatment: '', status: 'Operation'},
      {firstName: 'Ryan', secondName: 'Gregory', age: 78, gender: 'Male', disease: '', treatment: '', status: 'Death'},
      {firstName: 'Aaliyah', secondName: 'Sharpe', age: 55, gender: 'Female', disease: '', treatment: '', status: 'Admit'},
      {firstName: 'Jayden', secondName: 'Lloyd', age: 46, gender: 'Male', disease: '', treatment: '', status: 'Operation'}
    ];
  }
  render() {
    return (
      <PatientTable patients={this.patients} />
    );
  }
}
