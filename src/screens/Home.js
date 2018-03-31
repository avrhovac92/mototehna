import React, { Component } from 'react';

import ContainerComponent from 'components/ContainerComponent';

import OtherServices from 'components/OtherServices';
import TopProducts from 'components/TopProducts';
import AboutUs from 'components/AboutUs';
import StartShopping from 'components/StartShopping';
import SignIn from 'components/SignIn';

class Home extends Component {
  render() {
    return (
      <ContainerComponent>
        <div className="home-screen-container">
          <StartShopping />
          <TopProducts />
          <OtherServices />
          <AboutUs />
          <SignIn />
        </div>
      </ContainerComponent>
    );
  }
}

export default Home;
