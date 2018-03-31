import React, { Component } from 'react';
import 'css/ContactForm.css';
import { Icons } from 'assets';
import { userActions } from 'redux/actions';
import { connect } from 'react-redux';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      message: '',
      validEmail: true,
      validName: true,
      validMessage: true,
      formSent: false
    };
  }
  change = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  validateEmail = event => {
    const emailRules = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const validEmail = emailRules.test(event.target.value);

    this.setState({ validEmail: event.target.value ? validEmail : false });
    return validEmail;
  };

  fieldRequired = event => {
    if (event.target.value === '') {
      this.setState({ validName: false });
      return false;
    }
    this.setState({ validName: true });
    return true;
  };

  validateMessage = event => {
    if (event.target.value === '') {
      this.setState({ validMessage: false });
      return false;
    } else {
      if (event.target.value.length > 512) {
        this.setState({ validMessage: false });
        return false;
      } else {
        this.setState({ validMessage: true });
        return true;
      }
    }
  };
  send = async event => {
    const {
      state: { name, email, message, phone },
      props: { sendContactForm },
      validateMessage,
      validateEmail,
      fieldRequired
    } = this;
    if (
      !fieldRequired({ target: { value: name } }) ||
      !validateEmail({ target: { value: email } }) ||
      !validateMessage({ target: { value: message } })
    ) {
      return;
    }
    const response = await sendContactForm({
      name,
      email,
      phone,
      message
    });
    if (response.status) {
      this.setState({
        name: '',
        email: '',
        phone: '',
        message: '',
        formSent: true
      });
      setTimeout(() => {
        this.setState({ formSent: false });
      }, 5000);
    }
  };

  render() {
    const {
      state: {
        name,
        email,
        phone,
        message,
        validEmail,
        validName,
        validMessage,
        formSent
      },
      change,
      validateEmail,
      fieldRequired,
      validateMessage,
      send
    } = this;
    return (
      <div className="contactContainer">
        <div className="title-container">
          <p className="contact-title">Kontakt</p>
          <div className="underline" />
          <div className="registration-form">
            <label>Ime</label> <br />
            <input
              name="name"
              placeholder="Vaše ime"
              value={name}
              onChange={change}
              onBlur={fieldRequired}
              className={validName ? '' : 'invalid'}
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
            <label>Broj telefona</label> <br />
            <input
              name="phone"
              placeholder="061 1234 567"
              value={phone}
              onChange={change}
            />
            <br />
            <label>Poruka</label> <br />
            <textarea
              name="message"
              placeholder="Vaša poruka"
              value={message}
              onChange={change}
              onBlur={validateMessage}
              className={
                validMessage ? 'text-area-field' : 'text-area-field invalid'
              }
              rows="5"
              maxLength="512"
            />
            <br />
          </div>
          <button className="contactFormButton" onClick={send}>
            <img className="iconSend" src={Icons.send} alt="Send icon" />
            <span>POŠALJI</span>
          </button>
          <div
            className={
              validEmail
                ? 'validation-container hidden-div'
                : 'validation-container'
            }
          >
            <span className="error-message">
              <img
                className="iconSend"
                src={Icons.loginErrorIcon}
                alt="Error icon"
              />Niste uneli ispravnu Email adresu!
            </span>
          </div>
          <div
            className={
              validMessage
                ? 'validation-container hidden-div'
                : 'validation-container'
            }
          >
            <span className="error-message">
              <img
                className="iconSend"
                src={Icons.loginErrorIcon}
                alt="Error icon"
              />Niste uneli poruku!
            </span>
          </div>
          <div
            className={
              validName
                ? 'validation-container hidden-div'
                : 'validation-container'
            }
          >
            <span className="error-message">
              <img
                className="iconSend"
                src={Icons.loginErrorIcon}
                alt="Error icon"
              />Niste uneli ime!
            </span>
          </div>
          <div
            className={
              !formSent
                ? 'validation-container hidden-div'
                : 'validation-container'
            }
          >
            <span className="error-message">
              <img
                className="iconSend"
                src={Icons.orderConfirm}
                alt="Error icon"
              />Uspešno ste poslali formu! Javićemo Vam se u sledeća dva radna
              dana.
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(state => ({}), {
  sendContactForm: userActions.sendContactForm
})(ContactForm);
