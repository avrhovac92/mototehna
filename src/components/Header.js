import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown } from 'react-bootstrap';
import 'css/Header.css';
import logo from 'assets/slike/logo.png';
import hamburger from 'assets/slike/hamurger-menu.png';

class Header extends Component {
  render() {
    return (
      <div className="container">
        <img alt="logo" src={logo} className="logo" />
        <Navbar collapseOnSelect className="naslov">
          <Navbar.Header>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem className="text" eventKey={1}>
                Naslovna
              </NavItem>
              <NavItem divider />
              <NavItem className="text" eventKey={2}>
                Prodavnica
              </NavItem>
              <NavItem divider />
              <NavItem className="text" eventKey={3}>
                Usluge
              </NavItem>
              <NavItem divider />
              <NavItem className="text" eventKey={4}>
                O Nama
              </NavItem>
              <NavItem divider />
              <NavItem className="text" eventKey={5}>
                Kontakt
              </NavItem>
              <NavItem divider />
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
