import React, { Component } from 'react';

import 'css/Page1.css';
import 'css/Order.css';
import ContainerComponent from 'components/ContainerComponent';
import CustomerInformations from 'components/CustomerInformations';
import OrderLogin from 'components/OrderLogin';

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
      <ContainerComponent>
        <div className="title-container">
          <p className="registration-title">Naruci</p>
          <div className="underline" />
        </div>
        <div className="orderRequestText">
          Posaljite zahtjev za narudzbu kao:
        </div>
        <div className="radio-buttons">
          <form action="">
            <input
              type="radio"
              onChange={updateRadio}
              checked={newUser}
              name="newUser"
            />Novi korisnik
            <input
              type="radio"
              onChange={updateRadio}
              checked={!newUser}
              value="existingUser"
            />Postojeci korisnik
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
    this.setState({ newUser: event.target.name === 'newUser' });
  };
}

export default Registration;
