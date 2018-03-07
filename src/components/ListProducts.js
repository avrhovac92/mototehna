import React from 'react';
import 'css/TopProducts.css';
import Product from 'components/product';
import picture1 from 'assets/imgTopProducts/picture1.jpg';
import picture2 from 'assets/imgTopProducts/picture2.jpg';
import picture3 from 'assets/imgTopProducts/picture3.jpg';

let ListProducts = [
  <Product
    key="first"
    src={picture1}
    name="Sedište malo A3/APN6"
    category="MOPEDI"
    prise="1600 din"
  />,
  <Product
    key="second"
    src={picture2}
    name="Sedište malo A3/APN6"
    category="MOPEDI"
    prise="1600 din"
  />,
  <Product
    key="third"
    src={picture3}
    name="Sedište malo A3/APN6"
    category="MOPEDI"
    prise="1600 din"
  />
];

export default ListProducts;
