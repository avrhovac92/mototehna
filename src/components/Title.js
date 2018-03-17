import React, { Component } from 'react';
import 'css/Title.css';

export default class Title extends Component {
  render() {
    const { props: { title } } = this;
    return (
      <div className="titleContainer">
        <p className="title">{title}</p>
        <div className="line" />
      </div>
    );
  }
}
