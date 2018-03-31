import React, { Component } from 'react';
import ReactModal from 'react-modal';

import { Icons } from 'assets';
import { connect } from 'react-redux';
import { userActions } from 'redux/actions';
import { Link } from 'react-router-dom';
import SignIn from 'components/SignIn';

import 'css/ModalLogin.css';
import 'css/TopNavBar.css';

ReactModal.setAppElement('#root');

class TopNavBar extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };
  }

  handleOpenModal = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const {
      props: { token, firstName },
      state: { showModal },
      logoutUser,
      handleCloseModal
    } = this;
    return (
      <div className="TopNavBar">
        <ReactModal
          closeTimeoutMS={500}
          isOpen={showModal}
          contentLabel="onRequestClose Example"
          onRequestClose={handleCloseModal}
          className="Modal"
          overlayClassName="Overlay"
        >
          <SignIn handleCloseModal={handleCloseModal} />
        </ReactModal>

        <div className="phone">
          <img
            src={Icons.phoneHeader}
            className="phoneIcon"
            alt="Phone header"
          />
          <div>+381 61 4217 994</div>
        </div>

        <div className="bundleNavBar">
          {token ? (
            <div className="top-navbar-register-container">
              <div className="login">
                <img
                  src={Icons.profileIcon}
                  className="loginIcon"
                  alt="Login header"
                />
                <span className="top-navbar-hide-mobile">
                  {firstName ? firstName : 'Dobrodosli'}
                </span>
              </div>
              <Link to="/">
                <div className="login" onClick={logoutUser}>
                  <img
                    src={Icons.loginHeader}
                    className="loginIcon"
                    alt="Login header"
                  />
                  <span className="top-navbar-hide-mobile">Odjava</span>
                </div>
              </Link>
            </div>
          ) : (
            <div className="top-navbar-register-container">
              <div className="login" onClick={this.handleOpenModal}>
                <img
                  src={Icons.loginHeader}
                  className="loginIcon"
                  alt="Login header"
                />
                <span className="top-navbar-hide-mobile">Prijava</span>
              </div>
              <Link to="/registration">
                <div className="register">
                  <img
                    src={Icons.registerHeader}
                    className="registerIcon"
                    alt="Register header"
                  />
                  <span className="top-navbar-hide-mobile">Registracija</span>
                </div>
              </Link>
            </div>
          )}
          <Link to="/">
            <div className="top-navbar-cart">
              <img
                src={Icons.cartHeader}
                className="cartIcon"
                alt="Cart header"
              />
              <span className="top-navbar-hide-mobile">Korpa</span>
              <span>(0)</span>
            </div>
          </Link>
        </div>
      </div>
    );
  }

  logoutUser = () => {
    this.props.logout();
    window.scrollTo(0, 0);
  };
}

export default connect(
  state => ({
    token: state.user.token,
    firstName: state.user.firstName
  }),
  { logout: userActions.logout }
)(TopNavBar);
