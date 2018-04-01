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
              id='radio1'
              type="radio"
              onChange={updateRadio}
              checked={newUser}
              name="newUser"
            /><label for="radio1" className='radio-label'>Novi korisnik</label>
            <input
              id='radio2'
              type="radio"
              onChange={updateRadio}
              checked={!newUser}
              value="existingUser"
            /><label for="radio2" className='radio-label'>Postojeci korisnik</label>
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
