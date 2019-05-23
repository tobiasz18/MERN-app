import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Events/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();
