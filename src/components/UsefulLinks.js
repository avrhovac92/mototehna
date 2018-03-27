import React, { Component } from 'react';
import 'css/UsefulLinks.css';

import { Link } from 'react-router-dom';

export default class UsefulLinks extends Component {
  render() {
    return (
      <div className="useful-links">
        <h4 className="footer-title">Korisni Linkovi</h4>
        <span>Reklamacije</span> <br />
        <Link to="/privacypolicy">Politika Privatnosti</Link> <br />
        <span>Uslovi Kupovine</span> <br />
        <span>Uslovi Korišćenja</span>
      </div>
    );
  }
}
