import React, { Component } from 'react';
import 'css/StartShoping.css';

import { Icons } from 'assets';

export default class StartShoping extends Component {
  render() {
    return (
      <div className="container startShopingContainer">
        <div className="startShopingTitle">
          MALOPRODAJNI DISTRIBUTER REZERVNIH DELOVA
        </div>
        <div className="line" />
        <div className="startShopingDescription">
          MOTOTEHNA je maloprodajni distributer rezervnih delova za mopede,
          kosilice, vanbrodske motore, vodene pumpe i motorne testere
        </div>
        <div className="startShopingButton">
          <img className="cart" src={Icons.addToCartIcon} alt="Icon cart" />
          <span>Započni kupovinu</span>
        </div>
      </div>
    );
  }
}
