import React, { Component } from 'react';
import 'css/ContactPhoneNumbers.css';

export default class FooterItem extends Component {
  render() {
    const { header, items } = this.props;
    return (
      <div className="phone-numbers">
        <h4 className="footer-title">{header}</h4>
        {items.map((item, key) => (
          <div key={key} className="footer-item">
            {item.image ? (
              <img
                src={item.image}
                className={
                  key === 2 ? 'footer-image footer-remove-icon' : 'footer-image'
                }
                alt="phone header"
              />
            ) : null}
            <span className="footer-item-text">{item.text}</span>
          </div>
        ))}
      </div>
    );
  }
}
