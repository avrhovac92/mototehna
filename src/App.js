import React, { Component } from 'react';
import 'css/App.css';
import Brends from 'components/Bredns';

import OtherServices from 'components/OtherServices';
import TopProducts from 'components/TopProducts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopProducts />
        <br />
        <Brends/>
        <OtherServices />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default App;
