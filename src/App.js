import React, { Component } from 'react';
import 'css/App.css';

import { Switch, Route } from 'react-router-dom';
import Home from 'screens/Home';
import Register from 'screens/Register';
import ContainerComponent from 'components/ContainerComponent';

class App extends Component {
  render() {
    return (
      <ContainerComponent>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </ContainerComponent>
    );
  }
}

export default App;
