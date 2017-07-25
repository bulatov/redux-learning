import React from 'react';
import PatientTable from '../PatientTable';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.captions = [
      'Name', 'Surname', 'Age', 'Gender', 'Disease', 'Treatment', 'Status'
    ];

    this.contentType = {
      firstName: 'value',
      secondName: 'value',
      age: 'value',
      gender: 'value',
      disease: 'value',
      treatment: 'input',
      status: 'dropdown'
    };

    this.patients = [
      {firstName: 'Lewis', secondName: 'Farrell', age: 23, gender: 'Male', disease: 'Hemophilia', treatment: 'a', status: 'admit'},
      {firstName: 'Freya', secondName: 'John', age: 40, gender: 'Female', disease: 'Bernard-Soulier Disease', treatment: 'b', status: 'recovery'},
      {firstName: 'Sofia', secondName: 'Powell', age: 75, gender: 'Female', disease: 'Cardiac Catheterization', treatment: 'c', status: 'operation'},
      {firstName: 'Jacob', secondName: 'Shaw', age: 21, gender: 'Male', disease: 'Deviated Septum', treatment: 'd', status: 'death'},
      {firstName: 'Jessica', secondName: 'Faulkner', age: 74, gender: 'Female', disease: 'Ear Infection', treatment: 'e', status: 'admit'},
      {firstName: 'Zara', secondName: 'Gibson', age: 61, gender: 'Female', disease: 'Farsightedness', treatment: 'f', status: 'recovery'},
      {firstName: 'Archie', secondName: 'Howe', age: 20, gender: 'Male', disease: 'Gastritis', treatment: 'g', status: 'operation'},
      {firstName: 'Ryan', secondName: 'Gregory', age: 78, gender: 'Male', disease: 'Head Injury', treatment: 'h', status: 'death'},
      {firstName: 'Aaliyah', secondName: 'Sharpe', age: 55, gender: 'Female', disease: 'Infectious Mononucleosis', treatment: 'i', status: 'admit'},
      {firstName: 'Jayden', secondName: 'Lloyd', age: 46, gender: 'Male', disease: 'Joint Injection ', treatment: 'j', status: 'operation'}
    ];
  }
  render() {
    return (
      <PatientTable captions={this.captions} contentType={this.contentType} patients={this.patients} />
    );
  }
}
