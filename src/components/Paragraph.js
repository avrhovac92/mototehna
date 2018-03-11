import React, { Component } from 'react';
import 'css/Paragraph.css';

export default class Paragraph extends Component {
  render() {
    const { title, description } = this.props;
    return (
      <div className="paragraphContainer">
        <h4 className="proizvodnja">{title}</h4>
        <div className="lorem-ipsum">
          <p>{description}</p>
        </div>
      </div>
    );
  }
}
