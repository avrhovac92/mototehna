import React, { Component } from 'react';
import 'css/App.css';
import Header from 'components/Header';

import OtherServices from 'components/OtherServices';
import TopProducts from 'components/TopProducts';
import Footer from 'components/Footer';
import AboutUs from 'components/AboutUs';
import StartShoping from 'components/StartShoping';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <StartShoping />
        <TopProducts />
        <OtherServices />
        <AboutUs />
        <Footer />
      </div>
    );
  }
}

export default Home;
