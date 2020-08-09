import React from 'react';
import './App.css';
import { Link, Switch, Route, NavLink } from "react-router-dom";
import { Main } from "./Main";
import { Sign } from "./Sign";
import { Registration } from "./Registration";


class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/login' component={Sign} />
          <Route path='/register' component={Registration} />
        </Switch>
      </div>
    );
  }
}


export default App;




