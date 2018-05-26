import React, { Component } from "react";
import "css/Cart.css";
import Title1 from "components/Title1";
import { Images, Icons } from "assets";
import ProductInCart from "components/ProductInCart";
import ContainerComponent from "components/ContainerComponent";
import { Link } from "react-router-dom";

class Cart extends Component {
  render() {
    const { props: { deleteButton } } = this;
    return (
      <ContainerComponent>
        <div className="main">
          <Title1 className="title2" title="Korpa" />
          <div className="basket-title">
            <span className="basket-title-decoration">NAZIV</span>
            <span className="basket-title-decoration1">CENA</span>
            <span className="basket-title-decoration1">KOLIČINA</span>
            <span className="basket-title-decoration1">UKUPNO</span>
          </div>
          <ProductInCart
          id="1"
            src={Images.picture3}
            name="Sedište malo A3/APN6"
            price="1600 "
          />
          <ProductInCart
          id="2"
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
                <span>    <Link to="/order">NARUČI      </Link></span>
                <img className="arrow1" src={Icons.next} alt="Icon arrow" />
              </div>
            </div>

        </div>
      </ContainerComponent>
    );
  }
  deleteButton = () => {
    this.setState({});
  };
}

export default Cart;
