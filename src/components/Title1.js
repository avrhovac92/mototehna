import React, { Component } from 'react';
import 'css/Title1.css';

export default class Title1 extends Component {
  render() {
    const { props: { title } } = this;
    return (
      <div className="titleContainer1">
        <p className="title1">{title}</p>
        <div className="line1" />
      </div>
    );
  }
}
