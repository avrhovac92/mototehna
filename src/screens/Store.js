import React, { Component } from 'react';
import 'css/Store.css';
import SearchProducts from 'components/searchProducts';

import ContainerComponent from 'components/ContainerComponent';
import Title1 from 'components/Title1';
import Categories from 'components/Categories';

class Store extends Component {
  render() {
    return (
      <ContainerComponent>
        <Title1 title="Prodavnica" />
        <div className="store">
          <Categories />

          <SearchProducts />
        </div>
      </ContainerComponent>
    );
  }
}

export default Store;
