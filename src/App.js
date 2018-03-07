import React, { Component } from 'react';
import 'css/App.css';
import TopProducts from 'components/TopProducts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopProducts />
      </div>
    );
  }
}

export default App;
