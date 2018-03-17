import React, { Component } from 'react';
import 'css/App.css';

import OtherServices from 'components/OtherServices';
import TopProducts from 'components/TopProducts';
import Footer from 'components/Footer';
import Copyright from 'components/Copyright';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopProducts />
        <br />
        <OtherServices />
        <br />
        <br />
        <Footer />
        <Copyright />
        <br />
        <br />
      </div>
    );
  }
}

export default App;
