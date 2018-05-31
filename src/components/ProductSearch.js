import React, { Component } from "react";

import "css/ProductSearch.css";
import SearchedProducts from "components/SearchedProducts";
import SearchBar from "components/SearchBar";

class ProductSearch extends Component {
  render() {
    return (
      <div className="Contt">
        <SearchBar />
        <SearchedProducts />
      </div>
    );
  }
}
export default ProductSearch;
