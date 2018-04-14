import React, { Component } from "react";

import { userActions } from "redux/actions";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "css/OrderLogin.css";

import { Icons } from "assets";

class OrderLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      address: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
      validPassword: true,
      validEmail: true,
      validConfirmPassword: true,
      loginFailed: false
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

  login = async event => {
    const {
      state: { password, email },
      props: { signInUser, history: { replace } },
      validatePassword,
      validateEmail
    } = this;
    if (
      !validatePassword({ target: { value: password } }) ||
      !validateEmail({ target: { value: email } })
    ) {
      return;
    }
    const response = await signInUser({
      email,
      password
    });
    console.log("response", response);
    if (response.status) {
      replace("/checkout-confirmation");
      window.scrollTo(0, 0);
    } else {
      this.setState({ loginFailed: true });
    }
  };

  render() {
    const {
      state: { email, password, validEmail, validPassword },
      change,
      login
    } = this;
    return (
      <div className="registrationContainer">
        <p className="registration-title">
          <span className="postojeciKorisnik">Postojeci korisnik</span>
        </p>

        <div className="registration-form">
          <label>Email</label> <br />
          <input
            name="email"
            placeholder="vas@email.com"
            value={email}
            onChange={change}
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
            className={validPassword ? "" : "invalid"}
          />
        </div>
        <button className="createAccountButton" onClick={login}>
          <img
            className="accountIcon"
            src={Icons.loginIcon}
            alt="Account icon"
          />
          <span>PRIJAVITE SE</span>
        </button>
      </div>
    );
  }
}

export default connect(state => ({}), {
  signInUser: userActions.signInUser
})(withRouter(OrderLogin));
