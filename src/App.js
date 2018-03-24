import React, { Component } from 'react';
import 'css/App.css';
import SignIn from 'components/SignIn';

import OtherServices from 'components/OtherServices';
import TopProducts from 'components/TopProducts';
import AboutUs from 'components/AboutUs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopProducts />
        <br />
        <OtherServices />
        <br />
        <AboutUs />
        <br/>
        <SignIn />
      </div>

    );
  }
}

export default App;
