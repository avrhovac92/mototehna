import React, { Component } from 'react';
import 'css/Header.css';
import { Icons, Images } from 'assets';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header mototehna-navbar">
          <div className="header-logo-image">
            <img src={Images.logo} className="navbar-brand logo" />
            <button
              type="button"
              data-toggle="collapse"
              className="hide-screen"
              data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false"
            >
              <img
                src={Icons.hamburgerMenu}
                alt="hamburger"
                className="hamburger"
              />
            </button>
            </div>
          </div>
          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav">
              <li>
                <a href="#" className="navigation-item">
                  Naslovna
                </a>
              </li>
              <li>
                <a href="#" className="navigation-item">
                  Prodavnica
                </a>
              </li>
              <li>
                <a href="#" className="navigation-item">
                  Usluge
                </a>
              </li>
              <li>
                <a href="#" className="navigation-item">
                  O Nama
                </a>
              </li>
              <li>
                <a href="#" className="navigation-item">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
