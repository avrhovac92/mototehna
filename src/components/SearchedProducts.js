import React, { Component } from "react";
import "css/ProductSearch.css";

import { Icons } from "assets";
import Product from "components/Product";
import { ListProducts1 } from "config/constants";

class SearchedProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    };
  }

  rightClick = () => {
    const { state: { page }, leftClick, rightClick } = this;

    if (
      page < Math.floor(ListProducts1.length / 4) ||
      (page === Math.floor(ListProducts1.length / 4) &&
        ListProducts1.length % 4 !== 0)
    ) {
      this.setState({ page: page + 1 });
    }
    window.scrollTo(0, 0);
  };
  leftClick = () => {
    const { state: { page }, leftClick, rightClick } = this;

    if (page >= 2) {
      this.setState({ page: page - 1 });
    }
    window.scrollTo(0, 0);
  };

  render() {
    const { state: { page }, leftClick, rightClick } = this;
    return (
      <div>
        <div className="SearchProducts">
          {4 * (page - 1) < ListProducts1.length ? (
            <Product
              className="ProductS"
              name={ListProducts1[4 * (page - 1)].name}
              category={ListProducts1[4 * (page - 1)].category}
              price={ListProducts1[4 * (page - 1)].price}
              src={ListProducts1[4 * (page - 1)].src}
            />
          ) : null}

          {4 * (page - 1) + 1 < ListProducts1.length ? (
            <Product
              className="ProductS"
              name={ListProducts1[4 * (page - 1) + 1].name}
              category={ListProducts1[4 * (page - 1) + 1].category}
              price={ListProducts1[4 * (page - 1) + 1].price}
              src={ListProducts1[4 * (page - 1) + 1].src}
            />
          ) : null}
          {4 * (page - 1) + 2 < ListProducts1.length ? (
            <Product
              className="ProductS"
              name={ListProducts1[4 * (page - 1) + 2].name}
              category={ListProducts1[4 * (page - 1) + 2].category}
              price={ListProducts1[4 * (page - 1) + 2].price}
              src={ListProducts1[4 * (page - 1) + 2].src}
            />
          ) : null}
          {4 * (page - 1) + 3 < ListProducts1.length ? (
            <Product
              className="ProductS"
              name={ListProducts1[4 * (page - 1) + 3].name}
              category={ListProducts1[4 * (page - 1) + 3].category}
              price={ListProducts1[4 * (page - 1) + 3].price}
              src={ListProducts1[4 * (page - 1) + 3].src}
            />
          ) : null}
        </div>
        <div className="arrowsSearch">
          <span id="arrowsSearch">
            <img onClick={leftClick} src={Icons.arrowLeft} alt="Arrow left" />

            <div className="PageSearch">{page}</div>

            <img
              onClick={rightClick}
              src={Icons.arrowRight}
              alt="Arrow right"
            />
          </span>
        </div>
      </div>
    );
  }
}

export default SearchedProducts;
