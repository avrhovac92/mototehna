import React, { Component } from 'react';

import 'css/Page1.css';
import 'css/Order.css';
import ContainerComponent from 'components/ContainerComponent';
import OrderRegistration from 'components/OrderRegistration';
import OrderLogin from 'components/OrderLogin';
import OrderLoggedIn from 'components/OrderLoggedIn';

class Registration extends Component {
  render() {
    return (
      <ContainerComponent>
      <div className="title-container">
        <p className="registration-title">Naruci</p>
        <div className="underline" />
      </div>
      <div className= 'orderRequestText'>Posaljite zahtjev za narudzbu kao:</div>
      <div className='radio-buttons'>
      <form action="">
        <input type='radio'  name='korisnik' value='noviKorisnik'/>Novi korisnik
        <input type='radio'  name='korisnik' value='postojeciKorisnik'/>Postojeci korisnik
        </form>
      </div>
      <OrderRegistration />
      <OrderLogin />
      <OrderLoggedIn />
      </ContainerComponent>
    );
  }
}

export default Registration;
