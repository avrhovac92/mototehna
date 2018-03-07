import React from 'react';
import 'css/Header.css';
import logo from 'assets/slike/logo.png';
import hamburger from 'assets/slike/hamurger-menu.png';
let x = window.screen.width;

const Menu = () => {
  if (x > 500) {
    return (
      <div className="container">
        <img alt="logo" src={logo} className="logo" />
        <div className="link">
          <a href="#" className="active">
            Naslovna
          </a>
          <a href="#" className="text">
            Prodavnica
          </a>
          <a href="#" className="text">
            Usluge
          </a>
          <a href="#" className="text">
            O Nama
          </a>
          <a href="#" className="text">
            Kontakt
          </a>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <img alt="logo1" src={logo} className="logo1" />
        <div className="dropdown">
          <img
            type="button"
            id="menu1"
            data-toggle="dropdown"
            alt="a"
            src={hamburger}
          />
          <ul
            className="dropdown-menu dropdown-menu-right"
            role="menu"
            aria-labelledby="menu1"
          >
            <li role="presentation">
              <a role="menuitem" tabindex="-1" href="#">
                Naslovna
              </a>
            </li>
            <li role="presentation" className="divider" />
            <li role="presentation">
              <a role="menuitem" tabindex="-1" href="#">
                Prodavnica
              </a>
            </li>
            <li role="presentation" className="divider" />
            <li role="presentation">
              <a role="menuitem" tabindex="-1" href="#">
                Usluge
              </a>
            </li>
            <li role="presentation" className="divider" />
            <li role="presentation">
              <a role="menuitem" tabindex="-1" href="#">
                O Nama
              </a>
            </li>
            <li role="presentation" className="divider" />
            <li role="presentation">
              <a role="menuitem" tabindex="-1" href="#">
                Kontakt
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
};

export default Menu;
