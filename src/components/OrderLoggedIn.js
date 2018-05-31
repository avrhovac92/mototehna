import React, { Component } from 'react';

import { userActions } from 'redux/actions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import 'css/OrderLoggedIn.css';

import { Icons } from 'assets';

class OrderLoggedIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: props.firstName || '',
      lastName: props.lastName || '',
      address: props.address || '',
      phone: props.phone || '',
      email: props.email || '',
      validEmail: true,
      validPhoneNumber: true
    };
  }

  change = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  validatePhoneNumber = event => {
    if (event.target.value === '') {
      this.setState({ validPhoneNumber: false });
      return false;
    }
    this.setState({ validPhoneNumber: true });
    return true;
  };

  validateEmail = event => {
    const emailRules = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const validEmail = emailRules.test(event.target.value);

    this.setState({ validEmail });
    return validEmail;
  };

  register = async event => {
    const {
      state: { email, phone },
      props: { history: { replace }, updateUser },
      validateEmail,
      validatePhoneNumber
    } = this;
    if (
      !validatePhoneNumber({
        target: { value: phone }
      }) ||
      !validateEmail({ target: { value: email } })
    ) {
      return;
    }
    const { ...rest } = this.state;
    updateUser(rest);
    replace('/');
    window.scrollTo(0, 0);
  };

  render() {
    const {
      state: {
        firstName,
        lastName,
        email,
        validEmail,
        validPhoneNumber,
        address,
        phone
      },
      change,
      validateEmail,
      validatePhoneNumber,
      register
    } = this;
    return (
      <div className="registrationContainer">
        <div className="loginSuccessful">
          <img
            className="accountIcon"
            src={Icons.successfulOrder}
            alt="Account icon"
          />
          Uspješno ste se prijavili <br />
        </div>
        <p className="registration-title">
          <span className="postojeciKorisnik">Postojeći korisnik</span>
        </p>

        <div className="registration-form">
          <label>Ime</label> <br />
          <input
            name="firstName"
            placeholder="Vaše ime"
            value={firstName}
            onChange={change}
          />
          <br />
          <label>Prezime</label> <br />
          <input
            name="lastName"
            placeholder="Vaše prezime"
            value={lastName}
            onChange={change}
          />
          <br />
          <label>Adresa</label> <br />
          <input
            name="address"
            placeholder="Ulica i broj"
            value={address}
            onChange={change}
          />
          <br />
          <label>Broj telefona</label> <br />
          <input
            name="phone"
            placeholder="061 1234 567"
            value={phone}
            onChange={change}
            onBlur={validatePhoneNumber}
            className={validPhoneNumber ? '' : 'invalid'}
          />
          <br />
          <label>Email</label> <br />
          <input
            name="email"
            placeholder="vas@email.com"
            value={email}
            onChange={change}
            onBlur={validateEmail}
            className={validEmail ? '' : 'invalid'}
          />
        </div>
        <button className="createAccountButton" onClick={register}>
          <img
            className="accountIcon"
            src={Icons.confirmOrder}
            alt="Account icon"
          />
          <span>POTVRDI NARUDŽBU</span>
        </button>
      </div>
    );
  }
}

export default connect(
  state => ({
    email: state.user.email,
    phone: state.user.phone,
    firstName: state.user.firstName,
    lastName: state.user.lastName,
    address: state.user.address
  }),
  {
    updateUser: userActions.updateUser
  }
)(withRouter(OrderLoggedIn));