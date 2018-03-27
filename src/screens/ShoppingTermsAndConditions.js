import React, { Component } from "react";

import ShoppingTermsAndConditionsText from "components/ShoppingTermsAndConditionsText";
import ContainerComponent from "components/ContainerComponent";
import SideBar from "components/Sidebar";
import { SidebarPhones } from "config/constants";
import MototehnaMap from "components/MototehnaMap";
import "css/Page1.css";

class ShoppingTermsAndCOnditions extends Component {
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
        <ShoppingTermsAndConditionsText />
      </ContainerComponent>
    );
  }
}

export default ShoppingTermsAndCOnditions;
