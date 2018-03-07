import React, { Component } from 'react';
import 'css/Header.css';
import Menu from 'components/Menu.js';

class Header extends Component {
  render() {
    return (
      <div>
        <Menu />
      </div>
    );
  }
}

export default Header;
