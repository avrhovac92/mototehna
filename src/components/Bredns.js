import React, { Component } from 'react';

import 'css/Brends.css';
import { Icons, ListBrends } from 'assets';
import Slider from 'react-slick';

const settings = {
  arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  className: 'slider-container',
  useCSS:true,
//  variableWidth: true,
  prevArrow: <img src={Icons.arrowLeft} className="arrow1" alt="arrow-left" />,
  nextArrow: (
    <img src={Icons.arrowRight} className="arrow1" alt="arrow right " />
  ),
  responsive: [
    {
      breakpoint: 508,
      settings: {
        arrows: true,
        infinite: true,
        speed: 300,
        useCSS:true,
        slidesToShow: 1,
        slidesToScroll: 1,
       //variableWidth: true,

        prevArrow: (
          <img src={Icons.arrowLeft}   className="arrow1" alt="arrow-left" />
        ),
        nextArrow: (
          <img src={Icons.arrowRight} className="arrow1" alt="arrow right " />
        )
      }
    }
  ]
};

export default class Brends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      begin: 0
    };
  }
  render() {
    return (
      <div className="container">
      <Slider {...settings}>
        {ListBrends.map((item, key) => (
          <img key={key} className="brendPicture" src={item} alt="logo 1" />
        ))}
      </Slider>
      </div>
    );
  }



}
