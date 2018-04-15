import React, { Component } from 'react';
import 'css/UserInformations.css';
import 'css/UserInformationContainer.css';

import Title1 from './Title1';
import ChangePassword from './ChangePassword';

class UserInformations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      address: '',
      phone: '',
      email: '',
      buttonChangePassword: true
    };
  }

  change = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submit = async event => {
    const {
      state: { email, firstName, lastName, address, phone },
      props: {
        updateUser,
        history: { replace }
      }
    } = this;

    const response = await updateUser({
      email,
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
        address,
        phone,
        buttonChangePassword
      },
      change,
      ClickClick,
      submit
    } = this;
    return (
      <div>
        {buttonChangePassword ? (
          <div>
            <div>
              <Title1 title="Korisnicke Informacije" />
            </div>
            <div className="registrationContainer">
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
              />
              <br />
              <div>
                <button className="createAccountButton" onClick={submit}>
                  <span>AZURIRAJ PODATKE</span>
                </button>
                <button className="createAccountButton" onClick={ClickClick}>
                  <span>PROMENI LOZINKU</span>
                </button>
              </div>
            </div>

            <br />
          </div>
        ) : (
          <div className="UserInformationContainer">
            <div>
              <Title1 title="Korisnicke Informacije" />
            </div>
            <div className="registrationContainer">
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
              />
              <br />
              <div>
                <button className="createAccountButton" onClick={submit}>
                  <span>AZURIRAJ PODATKE</span>
                </button>
                <button className="createAccountButton" onClick={ClickClick}>
                  <span>PROMENI LOZINKU</span>
                </button>
              </div>
            </div>

            <br />
          </div>
        )}

        {buttonChangePassword ? (
          <div className="UserInformationContainer">
            <ChangePassword />
          </div>
        ) : (
          <div>
            <ChangePassword />
          </div>
        )}
      </div>
    );
  }
  ClickClick = () => {
    const {
      state: { buttonChangePassword }
    } = this;
    this.setState({ buttonChangePassword: !buttonChangePassword });
  };
}

export default UserInformations;
