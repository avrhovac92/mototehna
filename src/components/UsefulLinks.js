import React, { Component } from 'react';
import 'css/UsefulLinks.css';

export default class UsefulLinks extends Component {
  render() {
    return (
      <div className="useful-links">
        <h4 className="footer-title">Korisni Linkovi</h4>
        <span>Reklamacije</span> <br />
        <span>Politika Privatnosti</span> <br />
        <span>Uslovi Kupovine</span> <br />
        <span>Uslovi Korišćenja</span>
      </div>
    );
  }
}
