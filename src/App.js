import React, { Component } from 'react';
import 'css/App.css';

import OtherServices from 'components/OtherServices';
import TopProducts from 'components/TopProducts';
import Footer from 'components/Footer';
import AboutUs from 'components/AboutUs';
import StartShoping from 'components/StartShoping';

class App extends Component {
  render() {
    return (
      <div className="App">
        <StartShoping />
        <br />
        <TopProducts />
        <br />
        <OtherServices />
        <br />
        <AboutUs />
        <br />
        <Footer />
      </div>
    );
  }
}

export default App;
