import React, { Component } from 'react';
import 'css/SocialNetworkLinks.css';

import { Icons } from 'assets';

export default class SocialNetworkLinks extends Component {
  render() {
    return (
      <div className="social">
        <img src={Icons.facebookIcon} alt="facebook icon"/>
        <span>/mototehna.rs</span> <br />
        <img src={Icons.whatsappLogo} alt="whatsapp logo"/> <br />
        <img src={Icons.viberLogo} alt="viber logo"/>
      </div>
    );
  }
}
