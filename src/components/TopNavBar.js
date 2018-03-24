import React, { Component } from 'react';

import 'css/TopNavBar.css';
import { Icons } from 'assets';

class TopNavBar extends Component {
  render() {
    return (
      <div className="TopNavBar">
        <div className="phone">
          <img
            src={Icons.phoneHeader}
            className="phoneIcon"
            alt="Phone header"
          />
          <div>+381 61 4217 994</div>
        </div>

        <div className="bundleNavBar">
          <div className="login">
            <img
              src={Icons.loginHeader}
              className="loginIcon"
              alt="Login header"
            />
            <span className="top-navbar-hide-mobile">Prijava</span>
          </div>
          <div className="register">
            <img
              src={Icons.registerHeader}
              className="registerIcon"
              alt="Register header"
            />
            <span className="top-navbar-hide-mobile">Registracija</span>
          </div>
          <div className="cart">
            <img
              src={Icons.cartHeader}
              className="cartIcon"
              alt="Cart header"
            />
            <span className="top-navbar-hide-mobile">Korpa</span>
            <span>(0)</span>
          </div>
        </div>
      </div>
    );
  }
}

export default TopNavBar;
