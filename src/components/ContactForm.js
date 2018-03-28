import React, { Component } from 'react';
import 'css/ContactForm.css';
import { Icons } from 'assets';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      email: '',
      phone: '',
      message: '',
      validEmail: true,
      validName: true,
      validMessage: true
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

    this.setState({ validEmail });
    return validEmail;
  };

  fieldRequired = event => {
    if (event.target.value === '') {
      this.setState({ validName: false });
      return false;
    } else {
      this.setState({ validConfirmPassword: true });
      return true;
    }
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

  render() {
    const {
      state: {
        firstName,
        email,
        phone,
        message,
        validEmail,
        validName,
        validMessage
      },
      change,
      validateEmail,
      fieldRequired,
      validateMessage
    } = this;
    return (
      <div className="contactContainer">
        <div className="title-container">
          <p className="contact-title">Kontakt</p>
          <div className="underline" />
          <div className="registration-form">
            <label>Ime</label> <br />
            <input
              name="firstName"
              placeholder="Vaše ime"
              value={firstName}
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
          <button className="contactFormButton">
            <img className="imageSend" src={Icons.send} alt="Send icon" />
            <span>POŠALJI</span>
          </button>
        </div>
      </div>
    );
  }
}

export default ContactForm;
