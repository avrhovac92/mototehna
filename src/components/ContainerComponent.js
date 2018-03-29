import React, { Component } from 'react';
import 'css/index.css';

import Footer from 'components/Footer';
import Header from 'components/Header';
import TopNavBar from 'components/TopNavBar';

export default class ContainerComponent extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="container-component-wrapper">
        <div className="container-component-upper">
          <TopNavBar />
          <Header />
          {children}
        </div>



        <div className="container-component-lower">
          <Footer />
        </div>
      </div>
    );
  }
}
