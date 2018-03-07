import React, { Component } from 'react';
import 'css/TopProducts.css';
import Responsive from 'components/Responsive';
import src from 'assets/imgTopProducts/svi-proizvodi-btn-icon.png';

export default class TopProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      element: 0
    };
  }

  render() {
    const { state: { element }, leftClick, rightClick } = this;

    return (
      <div className="cointainer">
        <p className="title">Istaknuti Proizvodi</p>
        <div className="line" />
        <Responsive
          element={element}
          leftClick={leftClick}
          rightClick={rightClick}
        />
        <div className="button">
          <img className="arrow" src={src} alt="Icon arrow" />
          POGLEDAJ SVE PROIZVODE
        </div>
      </div>
    );
  }
  leftClick = () => {
    const { state: { element } } = this;
    let t = (element + 1) % 3;
    this.setState({ element: t });
  };

  rightClick = () => {
    const { state: { element } } = this;
    let t;
    element === 0 ? (t = 2) : (t = element - 1);
    this.setState({ element: t });
  };
}
