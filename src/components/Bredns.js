import React, { Component } from 'react';

import 'css/Brends.css';
import { Icons, ListBrends } from 'assets';
import Title from 'components/Title';

export default class Brends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      begin: 0,
      items: ListBrends.slice(0, 5)
    };
  }
  render() {
    const { state: { items }, leftClick, rightClick } = this;
    return (
      <div>
        <Title title="Brendovi" />
        <div className="row">
          <img
            src={Icons.arrowLeft}
            onClick={leftClick}
            className="arrow"
            alt="arrow-left"
          />
          <div className="container">
            {items.map((image, key) => (
              <img
                key={key}
                className={
                  key === 0 ? 'brendPicture' : 'brendPicture hideMobile'
                }
                src={image}
              />
            ))}
          </div>
          <img
            src={Icons.arrowRight}
            onClick={rightClick}
            className="arrow"
            id="rr"
            alt="arrow right "
          />
        </div>
      </div>
    );
  }

  rightClick = () => {
    const { begin } = this.state;
    const extraList = [...ListBrends, ...ListBrends];
    this.setState({
      begin: (begin + 1) % ListBrends.length,
      items: extraList.slice(begin + 1, begin + 6)
    });
  };

  leftClick = () => {
    const { begin } = this.state;
    const extraList = [...ListBrends, ...ListBrends, ...ListBrends];
    this.setState({
      begin: (begin + ListBrends.length - 1) % ListBrends.length,
      items: extraList.slice(
        begin + ListBrends.length - 1,
        begin + ListBrends.length + 4
      )
    });
  };
}
