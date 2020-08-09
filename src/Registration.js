import React from 'react';
import './App.css';




export class Registration extends React.Component {
  render() {
    return (
      <div>
        <h4>Введите свое имя</h4>
        <input type="text" />
        <h4>Введите свой Email</h4>
        <input type="email" />
        <h4>Введите свой Password</h4>
        <input type="password" />
        <br></br>
        <button>Registration</button>
      </div>
    );
  }
}


export default Registration;