import React, { Component } from 'react';
import 'css/Store.css';
import ProductSearch from 'components/ProductSearch';
import ContainerComponent from 'components/ContainerComponent';
import Title1 from 'components/Title1';
import Categories from 'components/Categories';

class Store extends Component {
  render() {
    return (
      <ContainerComponent>
        <Title1 title="Prodavnica" className="title-categories css-store" />
        <div className="store">
        <div className="CategoryS hideMobile">
          <Categories />
          </div>
          <ProductSearch/>
        </div>
      </ContainerComponent>
    );
  }
}

export default Store;
