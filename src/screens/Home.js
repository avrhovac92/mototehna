import React, { Component } from 'react';

import OtherServices from 'components/OtherServices';
import TopProducts from 'components/TopProducts';
import AboutUs from 'components/AboutUs';
import StartShopping from 'components/StartShopping';
import MotivationText from 'components/MotivationText';

class Home extends Component {
  render() {
    return (
      <div className="home-screen-container">
        <StartShopping />
        <MotivationText />
        <TopProducts />
        <OtherServices />
        <AboutUs />
      </div>
    );
  }
}

export default Home;
