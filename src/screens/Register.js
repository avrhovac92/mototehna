import React, { Component } from 'react';
import 'css/App.css';
import Header from 'components/Header';

import Footer from 'components/Footer';
import AboutUs from 'components/AboutUs';

class Register extends Component {
  render() {
    return (
      <div>
        <Header />
        <AboutUs />
        <Footer />
      </div>
    );
  }
}

export default Register;
