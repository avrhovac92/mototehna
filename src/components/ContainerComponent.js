import React, { Component } from 'react';
import 'css/index.css';

import Footer from 'components/Footer';
import Header from 'components/Header';

export default class ContainerComponent extends Component {
  render() {
    const { children, hasSidebar, sidebarItems } = this.props;
    return (
      <div className="container-component-wrapper">
        <div className="container-component-upper">
          <Header />
          {hasSidebar ? (
            <div className="container-sidebar-wrapper">
              <div className="container-sidebar-left-part">{children}</div>
              <div className="container-sidebar-right-part">
                {sidebarItems.map(item => item)}
              </div>
            </div>
          ) : (
            <div>{children}</div>
          )}
        </div>
        <div className="container-component-lower">
          <Footer />
        </div>
      </div>
    );
  }
}
