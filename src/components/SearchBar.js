import React, { Component } from "react";
import "css/ProductSearch.css";

class SearchBar extends Component {
  render() {
    return (
      <div className="search">
        <span className="fa fa-search" />
        <input className="inputSearch" placeholder="Pretraži delove..." />
      </div>
    );
  }
}

export default SearchBar;
