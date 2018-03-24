import React, { Component } from 'react';
import 'css/App.css';

import { Switch, Route } from 'react-router-dom';
import Home from 'screens/Home';
import Register from 'screens/Register';
import AboutUs from 'screens/AboutUs';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/aboutus" component={AboutUs} />
      </Switch>
    );
  }
}

export default App;
