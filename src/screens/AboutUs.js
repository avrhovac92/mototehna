import React, { Component } from 'react';

import Page1 from 'components/Page1';
import ContainerComponent from 'components/ContainerComponent';
import Slidebar from 'components/Slidebar';
import { SidebarPhones } from 'config/constants';
import MototehnaMap from 'components/MototehnaMap';
import 'css/Page1.css';

class AboutUs extends Component {
  render() {
    return (
      <ContainerComponent
        hasSidebar={true}
        sidebarItems={[
          <Slidebar {...SidebarPhones} />,
          <div className="aboutUsMap1">
            <MototehnaMap />
          </div>
        ]}
      >
        <Page1 />
      </ContainerComponent>
    );
  }
}

export default AboutUs;
