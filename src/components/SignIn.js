import React, { Component } from "react";
import "css/SignIn.css";
import { Icons } from "assets";
import Title2 from "components/Title2";
import "css/Title2.css";

class SignIn extends Component {
  render() {
    return (
      <div className="signInContainer">
        <div className="topTitle">PRIJAVA</div>
        <div className="SignInBody">
          <div className="osa">
            <img className="logo3" src={Icons.logo} alt="Mototehna logo" />
          </div>
          <Title2 className="title3" title="Prijava za postojeće korisnike" />
          <div className="formOf">Email
            <input className="email" placeholder="vas@email.com" />
            <br />Lozinka
            <input className="email" type="password" placeholder="Vaša lozinka" />
          </div>
          <div className="bottomPassword">
            <img src={Icons.forgotIcon} alt="forgotIcon" />
            <span className="forgotPas">Zaboravljena lozinka</span>
          </div>
          <div className="signInButton">
            <img
              className="loginButtonIcon"
              src={Icons.loginButtonIcon}
              alt="Button Icon"
            />
            <span className="buttonText">PRIJAVITE SE</span>
          </div>
          <div className="afterButtonText">Nemate nalog? Napravite novi
          <div className="here">ovde</div>
          </div>
        </div>
      </div>
    );
  }
}
export default SignIn;
