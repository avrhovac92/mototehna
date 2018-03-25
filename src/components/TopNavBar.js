import React, { Component } from 'react';

import 'css/TopNavBar.css';
import { connect } from 'react-redux';
import { userActions } from 'redux/actions';
import { Icons } from 'assets';
import { Link } from 'react-router-dom';

class TopNavBar extends Component {
  render() {
    const { props: { firstName, token }, logoutUser } = this;
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
          {token ? (
            <div className="top-navbar-register-container">
              <div className="login">
                <img
                  src={Icons.profileIcon}
                  className="loginIcon"
                  alt="Login header"
                />
                <span className="top-navbar-hide-mobile">
                  {firstName ? firstName : 'Dobrodosli'}
                </span>
              </div>
              <Link to="/">
                <div className="login" onClick={logoutUser}>
                  <img
                    src={Icons.loginHeader}
                    className="loginIcon"
                    alt="Login header"
                  />
                  <span className="top-navbar-hide-mobile">Odjava</span>
                </div>
              </Link>
            </div>
          ) : (
            <div className="top-navbar-register-container">
              <div className="login">
                <img
                  src={Icons.loginHeader}
                  className="loginIcon"
                  alt="Login header"
                />
                <span className="top-navbar-hide-mobile">Prijava</span>
              </div>
              <Link to="/registration">
                <div className="register">
                  <img
                    src={Icons.registerHeader}
                    className="registerIcon"
                    alt="Register header"
                  />
                  <span className="top-navbar-hide-mobile">Registracija</span>
                </div>
              </Link>
            </div>
          )}
          <div className="top-navbar-cart">
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

  logoutUser = () => {
    this.props.logout();
    window.scrollTo(0, 0);
  };
}

export default connect(
  state => ({
    firstName: state.user.firstName,
    token: state.user.token
  }),
  { logout: userActions.logout }
)(TopNavBar);
