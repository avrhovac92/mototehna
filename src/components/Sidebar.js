import React, { Component } from 'react';
import 'css/Sidebar.css';

export default class SidebarItem extends Component {
  render() {
    const { header, items } = this.props;
    return (
      <div className="phone-numbers1">
        <h4 className="slidebar-title">{header}</h4>
        {items.map((item, key) => (
          <div key={key} className="footer-item1">
            {item.image ? (
              <img
                src={item.image}
                className={
                  key === 2
                    ? 'footer-image1 footer-remove-icon'
                    : 'footer-image1'
                }
                alt="phone header"
              />
            ) : null}
            <span className="footer-item-text1">{item.text}</span>
          </div>
        ))}
        <h4 className="slidebar-title margin-top-40">Naša lokacija</h4>
      </div>
    );
  }
}
