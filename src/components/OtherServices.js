import React, { Component } from 'react';

import { Services } from 'config/constants';

import Title from './Title.js';
import Paragraph from './Paragraph.js';

import 'css/OtherServices.css';

export default class OstaleUsluge extends Component {
  render() {
    return (
      <div className="otherServicesContainer">
        <Title title="Ostale Usluge" />
        <div className="services">
          {Services.map((item, key) => <Paragraph {...item} key={key} />)}
        </div>
      </div>
    );
  }
}
