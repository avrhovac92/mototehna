import React, { Component } from 'react';

import { ListProducts } from 'config/constants';
import Product from 'components/Product';
import Title from 'components/Title';

import 'css/TopProducts.css';
import { Images, Icons } from 'assets';

export default class TopProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayedProduct: 1
    };
  }
  render() {
    const { leftClick, rightClick, state: { displayedProduct } } = this;
    return (
      <div className="cointainer">
        <Title title="Istaknuti Proizvodi" />
        <div className="arrows">
          <img
            onClick={leftClick}
            src={Icons.arrowLeft}
            alt="Arrow left"
            className="leftarrow"
          />
          <img
            onClick={rightClick}
            src={Icons.arrowRight}
            alt="Arrow right"
            className="rightarrow"
          />
        </div>
        <div className="products">
          {ListProducts.map((item, key) => (
            <Product
              key={key}
              {...item}
              src={Images['picture' + (key + 1)]}
              className={displayedProduct === key ? '' : 'hide-mobile'}
            />
          ))}
        </div>
        <div className="button-container">
          <div className="button">
            <img className="arrow" src={Icons.next} alt="Icon arrow" />
            <span>POGLEDAJ SVE PROIZVODE</span>
          </div>
        </div>
      </div>
    );
  }

  rightClick = () => {
    const { displayedProduct } = this.state;
    this.setState({ displayedProduct: (displayedProduct + 1) % 3 });
  };

  leftClick = () => {
    const { displayedProduct } = this.state;
    const module = (displayedProduct - 1) % 3;
    this.setState({
      displayedProduct: module === -1 ? ListProducts.length - 1 : module
    });
  };
}
