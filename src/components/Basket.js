import React, { Component } from 'react';
import 'css/Basket.css';
import Title1 from 'components/Title1';
import { Images, Icons } from 'assets';
import ProductInBasket from 'components/ProductInBasket';
class Basket extends Component {
  render() {
    const { props:{deleteButton}}=this;
    return (
      <div className="main">
        <Title1 className="title2" title="Korpa" />
        <div className="basket-title">
          <span className="basket-title-decoration">NAZIV</span>
          <span className="basket-title-decoration1">CENA</span>
          <span className="basket-title-decoration1">KOLIČINA</span>
          <span className="basket-title-decoration1">UKUPNO</span>
        </div>
        <ProductInBasket
          src={Images.picture3}
          name="Sedište malo A3/APN6"
          price="1600 "
        />
        <ProductInBasket
          src={Images.picture2}
          name="Sedište malo A3/APN6"
          price="1600 "
        />
        <div className="sum-container">
          <span>SVE UKUPNO: </span>
          <div className="sumOf">4800</div>
          <span>din</span>
        </div>
        <div className="button-container1">
          <div className="button1">
            <span>NARUČI</span>
            <img className="arrow1" src={Icons.next} alt="Icon arrow" />
          </div>
        </div>
      </div>
    );

  }
 deleteButton=()=>{
  this.setState({
  });

};
}

export default Basket;
