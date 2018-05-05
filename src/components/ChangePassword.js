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
      password: "",
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
      state: { oldPassword, password, confirmNewPassword },
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
              name="oldPassword"
              type="password"
              value={oldPassword}
              onChange={change}
              placeholder="Vaša stara lozinka"
            />
            <br />
            <label>Nova Lozinka</label>
            <br />
            <input
              name="password"
              type="password"
              onChange={change}
              value={password}
              placeholder="Vaša nova lozinka"
            />
            <br />
            <label>Potvrdi Novu Lozinku</label> <br />
            <input
              name="confirmNewPassword"
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
      state: { oldPassword, password }
    } = this;
    const response = await updatePassword({ oldPassword });
    if (response.status) {
      const patchPassword = updatePassword({ password });
      if (patchPassword) {
        ("/");
      }
      window.scrollTo(0, 0);
    } else {
      alert.show("Podaci nisu tačni");
    }
  };
}

export default connect(state => ({
  _id: state.user._id,
  oldPassword: state.user.oldPassword,
  password: state.user.password
}), {
  updatePassword: userActions.updatePassword
})(withAlert(ChangePassword));
