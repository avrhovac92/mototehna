import React, { Component } from 'react';
import 'css/App.css';

import OstaleUsluge from './OstaleUsluge.js';
import TopProducts from 'components/TopProducts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopProducts />
        <OstaleUsluge />
      </div>
    );
  }
}

export default App;
