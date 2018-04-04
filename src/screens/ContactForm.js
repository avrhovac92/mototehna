import React, { Component } from 'react';

import ContactFormComponent from 'components/ContactForm';
import ContainerComponent from 'components/ContainerComponent';
import SideBar from 'components/Sidebar';
import { SidebarPhones } from 'config/constants';
import MototehnaMap from 'components/MototehnaMap';
import 'css/ContactForm.css';

class ContactForm extends Component {
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
        <ContactFormComponent />
      </ContainerComponent>
    );
  }
}

export default ContactForm;
