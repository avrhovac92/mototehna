import React, { Component } from 'react';
import 'css/ContactPhoneNumbers.css';

import { Icons } from 'assets';

export default class SocialNetworkLinks extends Component {
  render() {
    return (
      <div className="phone-numbers social-networks-container">
        <div className="footer-title no-border-bottom margin-top-35" />
        <div className="facebook-container">
          <img
            className="footer-facebook-icon"
            src={Icons.facebookIcon}
            alt="facebook icon"
          />
          <span className="footer-text">/mototehna.rs</span>
        </div>
        <img
          className="footer-social-icon"
          src={Icons.whatsappLogo}
          alt="whatsapp logo"
        />
        <img
          className="footer-social-icon"
          src={Icons.viberLogo}
          alt="viber logo"
        />
      </div>
    );
  }
}
