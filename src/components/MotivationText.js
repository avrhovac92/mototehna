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
        <span>
          Kada čuješ posumnjaj, kada vidiš ne veruj, kada kupiš ne zaboravljaj!
        </span>
      </div>
    );
  }
}

export default MotivationText;
