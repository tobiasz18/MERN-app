import React from 'react';
import { Provider } from 'react-redux';
import store from './store'
import Navigation from './components/presentation/naivigation';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => (
  <Provider store={store}>
    <Router>
      <Navigation />
    </Router>
  </Provider>
)

export default App;