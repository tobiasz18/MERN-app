import React from 'react';
import { Provider } from 'react-redux';
import store from './store'
import Navigation from './components/presentation/Naivigation-Page';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EventsContainer from './components/containers/events-container-Page';
import addEventContainer from './components/containers/addEvent-container-Page';

const App = () => (
  <Provider store={store}>
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/" component={EventsContainer} />
        <Route exact path="/add_event" component={addEventContainer} />
      </Switch>
    </Router>
  </Provider>
)

export default App;