import React from 'react';
import './App.css';




export class Sign extends React.Component {
  render() {
    return (
      <div>
        <h4>Введите совой имейл</h4>
        <input type="email"></input>
        <h4>Введите свой пароль</h4>
        <input type="password"></input>
        <br></br>
        <button>sign in</button>
      </div>
    );
  }
}

export default Sign;