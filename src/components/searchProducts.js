import React, { Component } from 'react';
import 'css/searchProducts.css';

import { ListProducts1, ListProducts2 } from 'config/constants';
import Product from 'components/Product';
import Title from 'components/Title';

import { Images, Icons } from 'assets';

class SearchProducts extends Component {
  render() {
    return (
      <div className="search-products-container">
        <input placeholder="Search" className="inputSearch" />

        <div className="products-search">
          {ListProducts1.map((item, key) => (
            <Product
              clasName="productN"
              key={key}
              {...item}
              src={Images['picture' + (key + 1)]}
            />
          ))}
        </div>
        <div className="products-search">
          {ListProducts2.map((item, key) => (
            <Product
              clasName="productN"
              key={key}
              {...item}
              src={Images['picture' + (key + 1)]}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default SearchProducts;
