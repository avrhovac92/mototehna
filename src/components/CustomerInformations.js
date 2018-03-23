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
      validPassword: false,
      validMail: false
    };

    this.validatePassword = this.validatePassword.bind(this);
  }

  change = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  validatePassword = event => {
    const passwordRules = /^(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/;
    const validPassword = passwordRules.test(event.target.value);

    this.setState({ validPassword });
  };

  validateEmail = event => {
    const emailRules = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    const validEmail = emailRules.test(event.target.value);

    this.setState({ validEmail });
  };

  render() {
    return (
      <div>
        <div className="title-container">
          <p className="registration-title">Registracija</p>
          <div className="underline" />
        </div>
        <div className="registration-form">
          <label>Ime</label> <br />
          <input
            name="firstName"
            placeholder="Vaše ime"
            value={this.state.firstName}
            onChange={event => this.change(event)}
          />{" "}
          <br />
          <label>Prezime</label> <br />
          <input
            name="lastName"
            placeholder="Vaše prezime"
            value={this.state.lastName}
            onChange={event => this.change(event)}
          />
          <br />
          <label>Adresa</label> <br />
          <input
            name="address"
            placeholder="Ulica i broj"
            value={this.state.address}
            onChange={event => this.change(event)}
          />{" "}
          <br />
          <label>Broj telefona</label> <br />
          <input
            name="phoneNumber"
            placeholder="061 1234 567"
            value={this.state.phoneNumber}
            onChange={event => this.change(event)}
          />{" "}
          <br />
          <label>Email</label> <br />
          <input
            // name="email"
            placeholder="vas@email.com"
            // value={this.state.email}
            onChange={event => this.validateEmail(event)}
            className={this.state.validEmail ? "validEmail" : "invalidEmail"}
          />{" "}
          <br />
          <label>Lozinka</label> <br />
          <input
            name="password"
            type="text"
            placeholder="Lozinka"
            // value={this.state.password}
            onChange={event => this.validatePassword(event)}
            className={
              this.state.validPassword ? "validPassword" : "invalidPassword"
            }
          />{" "}
          <br />
          <label>Ponovite lozinku</label> <br />
          <input
            name="confirmPassword"
            type="password"
            placeholder="Ponovite lozinku"
            // value={this.state.confirmPassword}
          />
        </div>
        <div className="createAccountButton">
          <img
            className="accountIcon"
            src={Icons.createAccountIcon}
            alt="Account icon"
          />
          <span>NAPRAVITE NALOG</span>
        </div>
      </div>
    );
  }
}

export default CustomerInformations;
