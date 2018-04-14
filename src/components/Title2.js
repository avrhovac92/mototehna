import React, { Component } from 'react';
import 'css/Title2.css';

export default class Title extends Component {
  render() {
    const { props: { title } } = this;
    return (
      <div className="titleContainer3">
        <p className="title3">{title}</p>
        <div className="line3" />
      </div>
    );
  }
}
