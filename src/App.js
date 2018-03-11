import React, { Component } from 'react';
import 'css/App.css';

import OtherServices from 'components/OtherServices';
import TopProducts from 'components/TopProducts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopProducts />
        <br />
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
