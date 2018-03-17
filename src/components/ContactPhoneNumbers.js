import React, { Component } from 'react';
import 'css/ContactPhoneNumbers.css';

import { Icons } from 'assets';

export default class ContactPhoneNumbers extends Component {
  render() {
    return (
      <div className="phone-numbers">
        <h4 className="footer-title">Kontakt Telefoni</h4>
        <span>
          <img src={Icons.phoneHeader} />+381 61 4217 994
        </span>{' '}
        <br />
        <span>
          <img src={Icons.phoneHeader} />+381 21 6315 252
        </span>{' '}
        <br />
        <span>
          Radnim danima od 09 - 17h <br /> Subotom od 09 - 14h <br /> Nedelja
          neradna
        </span>
      </div>
    );
  }
}
