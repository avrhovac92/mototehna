import React, { Component } from 'react';
import 'css/App.css';

import { Switch, Route } from 'react-router-dom';
import configureStore from 'redux/configureStore';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Home from 'screens/Home';
import Registration from 'screens/Registration';
import AboutUs from 'screens/AboutUs';
import PrivacyPolicy from 'screens/PrivacyPolicy';
import TermsAndConditions from 'screens/TermsAndConditions';

class App extends Component {
  constructor(props) {
    super(props);
    const { store, persistor } = configureStore();
    this.store = store;
    this.persistor = persistor;
  }
  render() {
    return (
      <Provider store={this.store}>
        <PersistGate loading={null} persistor={this.persistor}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/registration" component={Registration} />
            <Route exact path="/aboutus" component={AboutUs} />
            <Route exact path="/privacy-policy" component={PrivacyPolicy} />
            <Route
              exact
              path="/terms-and-conditions"
              component={TermsAndConditions}
            />
          </Switch>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
