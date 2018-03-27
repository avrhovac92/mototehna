import React, { Component } from "react";

import TermsAndConditionsText from "components/TermsAndConditionsText";
import ContainerComponent from "components/ContainerComponent";
import SideBar from "components/Sidebar";
import { SidebarPhones } from "config/constants";
import MototehnaMap from "components/MototehnaMap";
import "css/Page1.css";

class PrivacyPolicy extends Component {
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
        <TermsAndConditionsText />
      </ContainerComponent>
    );
  }
}

export default PrivacyPolicy;
