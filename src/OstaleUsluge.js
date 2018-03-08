import React, { Component } from 'react';
import './css/OstaleUsluge.css';
import Title from './Title.js';
import Paragraph from './Paragraph.js';

export default class OstaleUsluge extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    const { state: paragraph} = this;
    return (
      <div class="ostale-usluge-sveSkupa">
        <Title />
        <Paragraph paragraph = {paragraph} />
      </div>
    );
  }
}
