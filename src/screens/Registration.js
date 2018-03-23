import React, { Component } from "react";
import "css/App.css";
import Header from "components/Header";

import Footer from "components/Footer";
import CustomerInformations from "components/CustomerInformations";

class Registration extends Component {
  render() {
    return (
      <div>
        <Header />
        <CustomerInformations />
        <Footer />
      </div>
    );
  }
}

export default Registration;
