import React from 'react';
import 'css/TopProducts.css';

import { Icons } from 'assets';

const Product = ({ src, name, category, price, className }) => {
  return (
    <div className={'product ' + className}>
      <img src={src} className="pictureProduct" alt="Products" />
      <div className="productTextContainer">
        <img src={Icons.yellowCart} className="iconCard" alt="Icon card-plus" />
        <div className="nameProduct">{name}</div>
        <div className="categoryProduct">{category}</div>
        <div className="priceProducts">{price}</div>
      </div>
    </div>
  );
};

export default Product;
