import React from 'react';
import 'css/TopProducts.css';
import src1 from 'assets/imgTopProducts/brendovi-arrow-left.png';
import src2 from 'assets/imgTopProducts/brendovi-arrow-right.png';
import ListProducts from 'components/ListProducts';

let screenSize = window.screen.availWidth;
const Responsive = ({ element, leftClick, rightClick }) => {
  if (screenSize > 500) {
    return <div className="products">{ListProducts}</div>;
  } else {
    return (
      <div>
        <div className="arrows">
          <img  onClick={() => leftClick()}  src={src1} alt="Arrow left"  className="leftarrow"/>
          <img  onClick={() => rightClick()} src={src2} alt="Arrow right" />
        </div>
        <div className="products">{ListProducts[element]}</div>
      </div>
    );
  }
};
export default Responsive;
