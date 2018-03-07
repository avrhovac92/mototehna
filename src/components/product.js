import React from 'react';
import 'css/TopProducts.css';
import icon from 'assets/imgTopProducts/add-to-cart-circle-combined.png';

const Product = ({ src, name, category, prise }) => {
  return (
    <div className="product">
      <img src={src} className="pictureProduct" alt="Products" />
      <img src={icon} className="iconCard" alt="Icon card-plus" />
      <div className="nameProduct">{name}</div>
      <div className="categoryProduct">{category}</div>
      <div className="priseProducts">{prise}</div>
    </div>
  );
};
export default Product;
