import React, { Component } from 'react';

import  'css/Brends.css';
import { Icons,ListBrends } from 'assets';
import Title from 'components/Title';




export default class Brends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      begin:0
    };
  }
  render() {
    const{state:{begin},leftClick,rightClick}=this;
    return (<div>
      <Title title="Brendovi" />
      <div className="row">
      <img src={Icons.arrowLeft}    onClick={leftClick} className="arrow" alt="arrow-left"/>
      <div className="container">
      <img className="brendPicture show" src={ListBrends['brend'+begin%16]}  alt="logo 1"/>
      <img className="brendPicture hideMobile" src={ListBrends['brend'+((begin+1)%16)]} alt="logo 2"/>
      <img className="brendPicture hideMobile" src={ListBrends['brend'+((begin+2)%16)]} alt="logo 3"/>
      <img className="brendPicture hideMobile" src={ListBrends['brend'+((begin+3)%16)]} alt="logo 4"/>
      <img className="brendPicture hideMobile" src={ListBrends['brend'+((begin+4)%16)]} alt="logo 5"/>

                  </div>
                  <img src={Icons.arrowRight} onClick={rightClick} className="arrow" id="rr" alt="arrow right "/></div>
              </div>)
  }
  rightClick = () => {
    const { begin } = this.state;
    this.setState({ begin: (begin + 1)});
  };
  leftClick = () => {
    const { begin } = this.state;
    if(begin!==0)
    this.setState({ begin: (begin -1)});
    else
    this.setState({ begin:(6)});

  };

  }