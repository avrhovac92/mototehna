import React, { Component } from 'react';
import 'css/Address.css';

export default class Address extends Component {
  render() {
    return (
      <div className="address">
        <h4 className="footer-title">Adresa</h4>
        <span>Sajlovo XIII 4</span> <br/>
        <span>21000 Novi Sad</span> <br/>
        <span>Republika Srbija</span>
      </div>
    );
  }
}
