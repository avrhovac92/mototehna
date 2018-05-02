import React, { Component } from 'react';
import 'css/Services.css';
import { Link } from 'react-router-dom';

class Services extends Component {
  render() {
    return (
      <div className="servicesContainer">
        <div className="servicesTitle">Plastifikacija</div>
        <div className="underline" />
        <div className="servicesText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          <div>
            <Link to="/contact-form">
              <button className="servicesButton">KONTAKTIRAJ</button>
            </Link>
          </div>
        </div>
        <div className="servicesTitle">Proizvodnja</div>
        <div className="underline" />
        <div className="servicesText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          <div>
            <Link to="/contact-form">
              <button className="servicesButton">KONTAKTIRAJ</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
