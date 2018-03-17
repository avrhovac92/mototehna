import React, { Component } from 'react';
import 'css/SocialNetworkLinks.css';

import { Icons } from 'assets';

export default class SocialNetworkLinks extends Component {
  render() {
    return (
      <div className="social">
        <img src={Icons.facebookIcon} />
        <span>/mototehna.rs</span> <br />
        <img src={Icons.whatsappLogo} /> <br />
        <img src={Icons.viberLogo} />
      </div>
    );
  }
}
