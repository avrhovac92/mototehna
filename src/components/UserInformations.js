import React, { Component } from "react";
import { userActions } from "redux/actions";
import { connect } from "react-redux";
import { withAlert } from "react-alert";

import "css/UserInformations.css";
import "css/UserInformationContainer.css";

import Title1 from "./Title1";
import ChangePassword from "./ChangePassword";

class UserInformations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: props.firstName || "",
      lastName: props.lastName || "",
      address: props.address || "",
      phone: props.phone || "",
      email: props.email || "",
      buttonChangePassword: true
    };
  }

  change = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submit = async event => {
    console.log("submit button triggered");
    const {
      state: { email, firstName, lastName, address, phone },
      props: { _id, updateUser, alert }
    } = this;

    const response = await updateUser({
      _id,
      email,
      firstName,
      lastName,
      address,
      phone
    });
    if (response.status) {
      alert.show("Podaci su azurirani");
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
    const { state: { buttonChangePassword } } = this;
    this.setState({ buttonChangePassword: !buttonChangePassword });
  };
}

export default connect(
  state => ({
    _id: state.user._id,
    email: state.user.email,
    phone: state.user.phone,
    firstName: state.user.firstName,
    lastName: state.user.lastName,
    address: state.user.address
  }),
  {
    updateUser: userActions.patchUser
  }
)(withAlert(UserInformations));
