import React, { Component } from "react";
import ReactModal from "react-modal";

import { Icons } from "assets";

import "css/ModalLogin.css";
import "css/TopNavBar.css";

import "screens/Home.js";

ReactModal.setAppElement("#root");

class TopNavBar extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div className="TopNavBar">
        <ReactModal
          closeTimeoutMS={500}
          isOpen={this.state.showModal}
          contentLabel="onRequestClose Example"
          onRequestClose={this.handleCloseModal}
          className="Modal"
          overlayClassName="Overlay"
        >
          <div className="close" onClick={this.handleCloseModal}>
            x
          </div>
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
          <div className="login" onClick={this.handleOpenModal}>
            <img
              src={Icons.loginHeader}
              className="loginIcon"
              alt="Login header"
            />
            <span className="top-navbar-hide-mobile">Prijava</span>
          </div>
          <div className="register">
            <img
              src={Icons.registerHeader}
              className="registerIcon"
              alt="Register header"
            />
            <span className="top-navbar-hide-mobile">Registracija</span>
          </div>
          <div className="cart">
            <img
              src={Icons.cartHeader}
              className="cartIcon"
              alt="Cart header"
            />
            <span className="top-navbar-hide-mobile">Korpa</span>
            <span>(0)</span>
          </div>
        </div>
      </div>
    );
  }
}

export default TopNavBar;
