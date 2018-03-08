import React from 'react';
import ReactDOM from 'react-dom';
import 'css/index.css';
import App from './App';
import Title from './Title.js';
import WebFont from 'webfontloader';
import registerServiceWorker from './registerServiceWorker';

WebFont.load({
  google: {
    families: ['Titillium Web:300,400,700', 'sans-serif']
  }
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
