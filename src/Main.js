import React from 'react';
import './App.css';
import styled from 'styled-components';
import { Link, Switch, Route, NavLink } from "react-router-dom";
import { Sign } from "./Sign";
import { Registration } from "./Registration";



export class Main extends React.Component {
  render() {
    return (
      <div>
        <Link to="/login">SignIn</Link>
        <Link to="/register">Register</Link>
        <MainText>Main Page</MainText>
      </div >
    );
  }
}
export default Main;
const MainText = styled.span`
display:block;
text-align:center;
text-transform:uppercase;
`;


