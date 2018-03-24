import React from 'react';
import ReactDOM from 'react-dom';
import 'css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/react-bootstrap/dist/react-bootstrap.min';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
