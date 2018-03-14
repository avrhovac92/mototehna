import React, { Component } from 'react';
import 'css/StartShoping.css';

import Title from 'components/Title';

import { Icons } from 'assets';

export default class StartShoping extends Component {
  render() {
    return (
      <div className="container startShopingContainer">
        <Title
          title="MALOPRODAJNI DISTRIBUTER REZERVNIH DELOVA"
          className="startShopingTitle"
        />
        <p>
          MOTOTEHNA je maloprodajni distributer rezervnih delova za mopede,{' '}
          <br />
          kosilice, vanbrodske motore, vodene pumpe i motorne testere
        </p>

        <div className="startShopingButton">
          <img className="cart" src={Icons.addToCartIcon} alt="Icon cart" />
          <span>Započni kupovinu</span>
        </div>
      </div>
    );
  }
}
