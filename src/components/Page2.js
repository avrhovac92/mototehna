import React, { Component } from 'react';
import 'css/Page1.css';
import Slidebar from 'components/Slidebar';
import { SidebarPhones } from 'config/constants';
import MototehnaMap from 'components/MototehnaMap';

class Page2 extends Component {
  render() {
    return (
      <div className="konmap">
        <div className="footer-container1" />
    
        <MototehnaMap className="aboutUsMap1" />
      </div>
    );
  }
}

export default Page2;
