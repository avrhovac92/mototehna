import React, { Component } from "react";

import Page1 from "components/Page1";
import ContainerComponent from "components/ContainerComponent";
import SideBar from "components/Sidebar";
import { SidebarPhones } from "config/constants";
import MototehnaMap from "components/MototehnaMap";
import "css/Page1.css";

class AboutUs extends Component {
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
        <Page1 />
      </ContainerComponent>
    );
  }
}

export default AboutUs;
