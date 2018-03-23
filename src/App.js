import React, { Component } from 'react';
import 'css/App.css';
import Header from 'components/Header';

import OtherServices from 'components/OtherServices';
import TopProducts from 'components/TopProducts';
import Footer from 'components/Footer';
import AboutUs from 'components/AboutUs';
import Page1 from 'components/Page1';
import StartShoping from 'components/StartShoping';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <StartShoping />
        <TopProducts />
        <OtherServices />
        <Page1 />
        <AboutUs />
        <Footer />
      </div>
    );
  }
}

export default App;
