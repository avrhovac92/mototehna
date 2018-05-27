import React, { Component } from 'react';
import 'css/SignIn.css';
import { Icons } from 'assets';
import Title2 from 'components/Title2';
import { Link } from 'react-router-dom';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import { userActions } from 'redux/actions';
import 'css/Title2.css';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }
  render() {
    const {
      props: { handleCloseModal },
      state: { email, password },
      changeState,
      signInUser
    } = this;
    return (
      <div className="signInContainer">
        <div className="topTitle">
          <span>PRIJAVA</span>
          <div className="sign-in-close" onClick={handleCloseModal}>
            x
          </div>
        </div>
        <div className="SignInBody">
          <div className="osa">
            <img className="logo3" src={Icons.logo} alt="Mototehna logo" />
          </div>
          <Title2 className="title3" title="Prijava za postojeće korisnike" />
          <div className="formOf">
            <div className="sign-in-field-label">Email</div>
            <input
              className="sign-in-email"
              value={email}
              onChange={event => changeState('email', event.target.value)}
              placeholder="vas@email.com"
            />
            <div className="sign-in-field-label">Lozinka</div>
            <input
              className="sign-in-email"
              type="password"
              onChange={event => changeState('password', event.target.value)}
              value={password}
              placeholder="Vaša lozinka"
            />
          </div>
          <div className="bottomPassword">
            <img
              src={Icons.forgotIcon}
              className="sign-in-fp-icon"
              alt="forgotIcon"
            />
            <span className="forgotPas">Zaboravljena lozinka</span>
          </div>
          <div className="signInButton" onClick={signInUser}>
            <img
              className="loginButtonIcon"
              src={Icons.loginButtonIcon}
              alt="Button Icon"
            />
            <span className="buttonText">PRIJAVITE SE</span>
          </div>
          <div className="afterButtonText">
            Nemate nalog? Napravite novi
            <Link to="/registration">
              <div className="here" onClick={() => window.scrollTo(0, 0)}> ovde</div>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  changeState = (field, value) => {
    this.setState({ [field]: value });
  };

  signInUser = async () => {
    const {
      props: { signInUser, handleCloseModal, alert },
      state: { email, password }
    } = this;
    const response = await signInUser({ email, password });
    if (response.status) {
      handleCloseModal();
    } else {
      alert.show('Podaci nisu tačni');
    }
  };
}

export default connect(state => ({}), {
  signInUser: userActions.signInUser
})(withAlert(SignIn));
