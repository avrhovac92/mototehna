import React, { Component } from "react";

import UserInformations from "components/UserInformations";
import ContainerComponent from "components/ContainerComponent";
import { SidebarPhones } from "config/constants";
import MototehnaMap from "components/MototehnaMap";
import SideBar from "components/Sidebar";

class UpdateUserInformations extends Component {
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
        <UserInformations />
      </ContainerComponent>
    );
  }
}

export default UpdateUserInformations;
