import React, { Component } from 'react';

import 'css/Page1.css';
import CustomerInformations from 'components/CustomerInformations';
import ContainerComponent from 'components/ContainerComponent';
import MototehnaMap from 'components/MototehnaMap';
import SideBar from 'components/Sidebar';
import { SidebarPhones } from 'config/constants';

class Registration extends Component {
  render() {
    return (
      <ContainerComponent
        hasSidebar={true}
        sidebarItems={[
          <SideBar {...SidebarPhones} />,
          <div className="aboutUsMap1">
            <MototehnaMap />
          </div>
        ]}
      >
        <CustomerInformations />
      </ContainerComponent>
    );
  }
}

export default Registration;
