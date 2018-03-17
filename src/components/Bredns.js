import React, { Component } from 'react';

import Bredns from 'css/Brends.css';
import { Icons,ListBrends } from 'assets';
import Title from 'components/Title';


let List=Object.values(ListBrends);

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
      <img src={Icons.arrowLeft}    onClick={leftClick} className="arrow"/>
      <div className="container">
      <img className="brendPicture show" src={ListBrends['brend'+begin%16]}/>
      <img className="brendPicture hideMobile" src={ListBrends['brend'+((begin+1)%16)]}/>
      <img className="brendPicture hideMobile" src={ListBrends['brend'+((begin+2)%16)]}/>
      <img className="brendPicture hideMobile" src={ListBrends['brend'+((begin+3)%16)]}/>
      <img className="brendPicture hideMobile" src={ListBrends['brend'+((begin+4)%16)]} id="po"/>

                  </div>
                  <img src={Icons.arrowRight} onClick={rightClick} className="arrow" id="rr"/></div>
              </div>)
  }
  rightClick = () => {
    const { begin } = this.state;
    this.setState({ begin: (begin + 1)});
  };
  leftClick = () => {
    const { begin } = this.state;
    if(begin!=0)
    this.setState({ begin: (begin -1)});
    else
    this.setState({ begin:(6)});

  };

  }
