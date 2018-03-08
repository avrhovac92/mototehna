import React, { Component } from 'react';
import './css/Title.css';

export default class Title extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1 class="ostale-usluge-naslov">Ostale Usluge</h1>
        <div class="underline" />
      </div>
    );
  }
}
