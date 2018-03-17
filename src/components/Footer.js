import React, { Component } from 'react';
import 'css/Footer.css';

import UsefulLinks from './UsefulLinks';
import Address from './Address';
import ContactPhoneNumbers from './ContactPhoneNumbers';
import SocialNetworkLinks from './SocialNetworkLinks';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <UsefulLinks />
        <Address />
        <ContactPhoneNumbers />
        <SocialNetworkLinks />
      </div>
    );
  }
}
