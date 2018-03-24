import React, { Component } from "react";
import "css/CustomerInformations.css";

import { Icons } from "assets";

class CustomerInformations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      address: "",
      phoneNumber: "",
      email: "",
      password: "",
      confirmPassword: "",
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
    } else {
      this.setState({ validConfirmPassword: true });
    }
  };

  validatePassword = event => {
    const passwordRules = /^(?=.{8,}).*$/;
    const validPassword = passwordRules.test(event.target.value);

    this.setState({ validPassword });
  };

  validateEmail = event => {
    console.log("validateEmail", event);
    const emailRules = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    const validEmail = emailRules.test(event.target.value);

    this.setState({ validEmail });
  };

  register = event => {};

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
        phoneNumber,
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
        <div className="title-container">
          <p className="registration-title">Registracija</p>
          <div className="underline" />
        </div>
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
            name="phoneNumber"
            placeholder="061 1234 567"
            value={phoneNumber}
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
            className={validEmail ? "" : "invalid"}
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
            className={validPassword ? "" : "invalid"}
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
            className={validConfirmPassword ? "" : "invalid"}
          />
        </div>
        <button className="createAccountButton" onClick={register}>
          <img
            className="accountIcon"
            src={Icons.createAccountIcon}
            alt="Account icon"
          />
          <span>NAPRAVITE NALOG</span>
        </button>
      </div>
    );
  }
}

export default CustomerInformations;
