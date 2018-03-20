import React, { Component } from "react";
import "css/App.css";
import Header from "components/Header";

import Footer from "components/Footer";
import AboutUs from "components/AboutUs";
import CustomerInformations from "components/CustomerInformations";

class Register extends Component {
  render() {
    return (
      <div>
        <Header />
        <AboutUs />
        <CustomerInformations />
        <Footer />
      </div>
    );
  }
}

export default Register;
