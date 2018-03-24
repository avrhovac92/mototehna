import React, { Component } from 'react';
import 'css/Footer.css';

import FooterItem from './FooterItem';
import SocialNetworkLinks from './SocialNetworkLinks';
import { FooterList } from 'config/constants';
import Copyright from 'components/Copyright';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer-footer-wrapper">
        <div className="footer-container">
          {FooterList.map((item, key) => <FooterItem key={key} {...item} />)}
          <SocialNetworkLinks />
        </div>
        <Copyright />
      </div>
    );
  }
}
