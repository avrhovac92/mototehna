import React, { Component } from 'react';

import { userActions } from 'redux/actions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import 'css/OrderRegistration.css';

import { Icons } from 'assets';

class OrderRegistration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      address: '',
      phone: '',
      email: '',
      password: '',
      confirmPassword: '',
      validPassword: true,
      validEmail: true,
      validConfirmPassword: true
    };
    this.validatePassword = this.validatePassword.bind(this);
  }

  change = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  validateConfirmPassword = event => {
    if (event.target.value !== this.state.password) {
      this.setState({ validConfirmPassword: false });
      return false;
    }
    this.setState({ validConfirmPassword: true });
    return true;
  };

  validatePassword = event => {
    const passwordRules = /^(?=.{8,}).*$/;
    const validPassword = passwordRules.test(event.target.value);

    this.setState({ validPassword });
    return validPassword;
  };

  validateEmail = event => {
    const emailRules = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const validEmail = emailRules.test(event.target.value);

    this.setState({ validEmail });
    return validEmail;
  };

  register = async event => {
    const {
      state: {
        password,
        email,
        confirmPassword,
        firstName,
        lastName,
        address,
        phone
      },
      props: { registerUser, history: { replace } },
      validatePassword,
      validateEmail,
      validateConfirmPassword
    } = this;
    if (
      !validatePassword({ target: { value: password } }) ||
      !validateEmail({ target: { value: email } }) ||
      !validateConfirmPassword({
        target: { value: confirmPassword }
      })
    ) {
      return;
    }
    const response = await registerUser({
      email,
      password,
      firstName,
      lastName,
      address,
      phone
    });
    if (response.status) {
      replace('/');
      window.scrollTo(0, 0);
    }
  };

  render() {
    const {
      state: {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        validEmail,
        validPassword,
        address,
        phone,
        validConfirmPassword
      },
      change,
      validateEmail,
      validatePassword,
      register,
      validateConfirmPassword
    } = this;
    return (
      <div className="registrationContainer">
        <p className="registration-title">
          <span className="noviKorisnik">Novi korisnik</span>
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
          <br />
          <label>Lozinka</label> <br />
          <input
            name="password"
            type="password"
            placeholder="Lozinka"
            value={password}
            onChange={change}
            onBlur={validatePassword}
            className={validPassword ? '' : 'invalid'}
          />
          <br />
          <label>Ponovite lozinku</label> <br />
          <input
            name="confirmPassword"
            type="password"
            placeholder="Ponovite lozinku"
            onChange={change}
            onBlur={validateConfirmPassword}
            value={confirmPassword}
            className={validConfirmPassword ? '' : 'invalid'}
          />
        </div>
        <button className="createAccountButton" onClick={register}>
          <img
            className="accountIcon"
            src={Icons.confirmOrder}
            alt="Account icon"
          />
          <span>POTVRDI NARUDZBU</span>
        </button>
        <div className={validEmail ? 'hidden-div' : ''}>
          <span className="error-message">
            <img
              className="accountIcon"
              src={Icons.loginErrorIcon}
              alt="Error icon"
            />Niste uneli ispravnu Email adresu!
          </span>
        </div>
        <div className={validPassword ? 'hidden-div' : ''}>
          <span className="error-message">
            <img
              className="accountIcon"
              src={Icons.loginErrorIcon}
              alt="Error icon"
            />Niste uneli ispravnu lozinku!
          </span>
        </div>
        <div className={validConfirmPassword ? 'hidden-div' : ''}>
          <span className="error-message">
            <img
              className="accountIcon"
              src={Icons.loginErrorIcon}
              alt="Error icon"
            />Lozinke se ne podudaraju!
          </span>
        </div>
      </div>
    );
  }
}

export default connect(state => ({}), {
  registerUser: userActions.registerUser
})(withRouter(OrderRegistration));
