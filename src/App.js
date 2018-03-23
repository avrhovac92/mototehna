import React, { Component } from "react";
import "css/App.css";

import { Switch, Route } from "react-router-dom";
import Home from "screens/Home";
import Register from "screens/Register";
import Registration from "screens/Registration";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/registration" component={Registration} />
      </Switch>
    );
  }
}

export default App;
