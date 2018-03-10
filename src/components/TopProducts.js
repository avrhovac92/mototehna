import React, { Component } from 'react';
import 'css/TopProducts.css';
import src from 'assets/imgTopProducts/svi-proizvodi-btn-icon.png';
import src1 from 'assets/imgTopProducts/brendovi-arrow-left.png';
import src2 from 'assets/imgTopProducts/brendovi-arrow-right.png';
import ListProducts from 'components/ListProducts';
import Product from 'components/product';
import picture1 from 'assets/imgTopProducts/picture1.jpg';
import picture2 from 'assets/imgTopProducts/picture2.jpg';
import picture3 from 'assets/imgTopProducts/picture3.jpg';

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
        <div className="arrows">
          <img
            onClick={() => leftClick()}
            src={src1}
            alt="Arrow left"
            className="leftarrow"
          />
          <img
            onClick={() => rightClick()}
            src={src2}
            alt="Arrow right"
            className="rightarrow"
          />
        </div>
        <div className="products">
          <div className="show" id="firstProduct">
            <Product
              src={picture1}
              name={ListProducts[0].name}
              category={ListProducts[0].category}
              prise={ListProducts[0].prise}
            />
          </div>
          <div className="hide" id="secondProduct">
            <Product
              src={picture2}
              name={ListProducts[1].name}
              category={ListProducts[1].category}
              prise={ListProducts[1].prise}
            />
          </div>
          <div className="hide" id="thirdProduct">
            <Product
              src={picture3}
              name={ListProducts[2].name}
              category={ListProducts[2].category}
              prise={ListProducts[2].prise}
            />
          </div>
        </div>

        <div className="button">
          <img className="arrow" src={src} alt="Icon arrow" />
          POGLEDAJ SVE PROIZVODE
        </div>
      </div>
    );
  }
  rightClick = () => {
    var firstProduct = document.getElementById('firstProduct');
    var secondProduct = document.getElementById('secondProduct');
    var thirdProduct = document.getElementById('thirdProduct');
    if (firstProduct.className == 'show') {
      firstProduct.className = 'hide';
      secondProduct.className = 'show';
    } else {
      if (secondProduct.className == 'show') {
        secondProduct.className = 'hide';
        thirdProduct.className = 'show';
      } else {
        thirdProduct.className = 'hide';
        firstProduct.className = 'show';
      }
    }
  };
  leftClick = () => {
    var firstProduct = document.getElementById('firstProduct');
    var secondProduct = document.getElementById('secondProduct');
    var thirdProduct = document.getElementById('thirdProduct');
    if (firstProduct.className == 'show') {
      firstProduct.className = 'hide';
      thirdProduct.className = 'show';
    } else {
      if (secondProduct.className == 'show') {
        secondProduct.className = 'hide';
        firstProduct.className = 'show';
      } else {
        thirdProduct.className = 'hide';
        secondProduct.className = 'show';
      }
    }
  };
}
