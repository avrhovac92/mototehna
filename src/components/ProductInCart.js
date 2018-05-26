import React from "react";
import "css/Cart.css";
import { Icons } from "assets";
import NumericInput from "react-numeric-input";

const ProductInCart = ({ src, name, price }) => {
  return (
    <div className="basket-content">
      <div className="remove-product" onClick={() => {
      }}>x</div>
      <div className="button-div">
        <img src={Icons.removeProduct} type="button" className="button-class" />
      </div>
      <div className="pictureBorder">
        <img className="picture-div" src={src} alt="Pictures" />
      </div>
      <div className="product-name">{name}</div>
      <div className="product-price">{price} din</div>
      <div className="product-value">
        <NumericInput
          className="form-control"
          value={1}
          min={1}
          size={4}
          style={{
            input: {
              borderRadius: 0,
              background: "#eee"
            }
          }}
        />
      </div>
      <div className="product-sum">{price}din</div>
    </div>
  );
};

export default ProductInCart;
