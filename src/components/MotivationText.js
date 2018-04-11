import React, { Component } from 'react';

import 'css/MotivationText.css';
import { Icons } from 'assets';

class MotivationText extends Component {
  render() {
    return (
      <div className="MotivationText">
        <img
          src={Icons.balckQuote}
          className="balckQuoteIcon"
          alt="Blackquote"
        />
        <div className="Text">
          Kada čuješ posumnjaj, kada vidiš ne veruj, kada kupiš ne zaboravljaj!
        </div>
      </div>
    );
  }
}

export default MotivationText;
