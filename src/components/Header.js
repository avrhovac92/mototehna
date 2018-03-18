import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown } from 'react-bootstrap';
import 'css/Header.css';
import logo from 'assets/slike/logo.png';
import hamburger from 'assets/slike/hamurger-menu.png';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header mototehna-navbar">
            <img src={logo} className="navbar-brand logo" />
            <button
              type="button"
              data-toggle="collapse"
              className="hide-screen"
              data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false"
            >
              <img src={hamburger} alt="hamburger" className="hamburger" />
            </button>
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
              <li role="presentation" className="divider" />
              <li>
                <a href="#" className="navigation-item">
                  Prodavnica
                </a>
              </li>
              <li role="presentation" className="divider" />
              <li>
                <a href="#" className="navigation-item">
                  Usluge
                </a>
              </li>
              <li role="presentation" className="divider" />
              <li>
                <a href="#" className="navigation-item">
                  O Nama
                </a>
              </li>
              <li role="presentation" className="divider" />
              <li>
                <a href="#" className="navigation-item">
                  Kontakt
                </a>
              </li>
              <li role="presentation" className="divider" />
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
