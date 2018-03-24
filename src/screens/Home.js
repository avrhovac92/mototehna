import React, { Component } from 'react';

import OtherServices from 'components/OtherServices';
import TopProducts from 'components/TopProducts';
import AboutUs from 'components/AboutUs';
import StartShopping from 'components/StartShopping';
import Bredns from 'components/Bredns';

class Home extends Component {
  render() {
    return (
      <div className="home-screen-container">
        <StartShopping />
        <TopProducts />
      {  /*<Bredns/>*/}
        <OtherServices />
        <AboutUs />
      </div>
    );
  }
}

export default Home;
