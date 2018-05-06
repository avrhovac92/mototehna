import React, { Component } from "react";

import ServicesComponent from "components/Services";
import ContainerComponent from "components/ContainerComponent";
import SideBar from "components/Sidebar";
import { SidebarPhones } from "config/constants";
import MototehnaMap from "components/MototehnaMap";
import "css/Services.css";

class Services extends Component {
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
        <ServicesComponent />
      </ContainerComponent>
    );
  }
}

export default Services;
