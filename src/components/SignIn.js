import React, { Component } from 'react';
import 'css/SignIn.css';
import { Icons } from 'assets';


class SignIn extends Component {
  render() {
    return (
    <div className="signInContainer">
    <p className="topTitle">PRIJAVA</p>
    <img className="logo" src={Icons.logo} alt="Mototehna logo"/>
    <div className="titleSignInContainer">
    <p className="title">Prijava za postojeće korisnike</p>
    <div className="line" />
    <div className="form"/>
    <p className="Email">Email</p>
    <input
    className="form"
    type="text"
    placeholder="vas@email.com"
    />
    <p className="password">Lozinka</p>
    <input
    className="form"
    type="password"
    placeholder="Vaša lozinka"
    />
    <p className="bottomPassword">Zaboravljena lozinka</p>
    <div className="signInButton">
    <img className="loginButtonIcon" src={Icons.loginButtonIcon} alt="Button Icon" />
    <span>Prijavite se</span>
    </div>
    </div>
    </div>
  );
}
}
export default SignIn;
