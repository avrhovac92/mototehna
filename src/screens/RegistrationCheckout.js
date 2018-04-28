import React, { Component } from "react";

import "css/Page1.css";
import "css/Order.css";
import ContainerComponent from "components/ContainerComponent";
import CustomerInformations from "components/CustomerInformations";
import OrderLogin from "components/OrderLogin";
import MototehnaMap from "components/MototehnaMap";
import SideBar from "components/Sidebar";
import { SidebarPhones } from "config/constants";

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newUser: true
    };
  }
  render() {
    const { state: { newUser }, updateRadio } = this;
    return (
      <ContainerComponent
        hasSidebar={true}
        sidebarItems={[
          <SideBar {...SidebarPhones} />,
          <div className="aboutUsMap1">
            <MototehnaMap />
          </div>
        ]}
      >
        <div className="title-container-order">
          <p className="registration-title">Naruči</p>
          <div className="underline" />
        </div>
        <div className="orderRequestText">
          Pošaljite zahtjev za narudžbu kao:
        </div>
        <div className="radio-buttons">
          <form action="">
            <div className="registration-checkout-radio-button-container">
              <input
                id="radio1"
                type="radio"
                onChange={updateRadio}
                checked={newUser}
                name="newUser"
                className="registration-checkout-radio-button"
              />
              <label htmlFor="radio1" className="radio-label">
                Novi korisnik
              </label>
            </div>
            <div className="registration-checkout-radio-button-container">
              <input
                id="radio2"
                type="radio"
                onChange={updateRadio}
                checked={!newUser}
                value="existingUser"
                className="registration-checkout-radio-button"
              />
              <label htmlFor="radio2" className="radio-label">
                Postojeći korisnik
              </label>
            </div>
          </form>
        </div>
        {newUser ? (
          <CustomerInformations insideCheckout={true} />
        ) : (
          <OrderLogin insideCheckout={true} />
        )}
      </ContainerComponent>
    );
  }

  updateRadio = event => {
    this.setState({ newUser: event.target.name === "newUser" });
  };
}

export default Registration;
