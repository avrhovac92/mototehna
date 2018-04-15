import React, { Component } from "react";
import "css/UserInformations.css";

import Title1 from "components/Title1";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import { userActions } from "redux/actions";
import "css/Title1.css";

class ChangePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oldPassword: "",
      newPassword: "",
      confirmNewPassword: ""
    };
  }
  change = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    const {
      state: { oldPassword, newPassword, confirmNewPassword },
      updatePassword,
      change
    } = this;
    return (
      <div>
        <div>
          <Title1 title="Promena Lozinke" />
          <div className="registrationContainer">
            <label>Stara Lozinka</label>
            <br />
            <input
              type="password"
              value={oldPassword}
              onChange={change}
              placeholder="Vaša stara lozinka"
            />
            <br />
            <label>Nova Lozinka</label>
            <br />
            <input
              type="password"
              onChange={change}
              value={newPassword}
              placeholder="Vaša nova lozinka"
            />
            <br />
            <label>Potvrdi Novu Lozinku</label> <br />
            <input
              type="password"
              onChange={change}
              value={confirmNewPassword}
              placeholder="Potvrdite novu lozinku"
            />
            <br />
            <button className="createAccountButton" onClick={updatePassword}>
              <span>PROMENITE LOZINKU</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  changeState = (field, value) => {
    this.setState({ [field]: value });
  };

  updatePassword = async () => {
    const {
      props: { updatePassword },
      state: { oldPassword, newPassword }
    } = this;
    const response = await updatePassword({ oldPassword });
    if (response.status) {
      const patchPassword = updatePassword({ newPassword });
      if (patchPassword) {
        ("/");
      }
      window.scrollTo(0, 0);
    } else {
      alert.show("Podaci nisu tačni");
    }
  };
}

export default connect(state => ({}), {
  updatePassword: userActions.updateUser
})(withAlert(ChangePassword));
