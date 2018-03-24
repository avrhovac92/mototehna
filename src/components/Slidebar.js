import React, { Component } from 'react';
import 'css/Slidebar.css';

export default class SlidebarItem extends Component {
  render() {
    const { header, items } = this.props;
    return (
      <div className="phone-numbers1">
        <h4 className="slidebar-title">{header}</h4>
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
        <h4 className="slidebar-title">Naša lokacija</h4>
      </div>
    );
  }
}
