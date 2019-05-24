import React from 'react';
import { Provider } from 'react-redux';
import store from './store'
import Navigation from './components/presentation/Naivigation-Page';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EventsContainer from './components/containers/events-container-Page';
import addEventContainer from './components/containers/addEvent-container-Page';
import EventDetails from './components/containers/Details-events-Page';
import SearchEvent from './components/containers/search-events-page';

const App = () => (
  <Provider store={store}>
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/" component={EventsContainer} />
        <Route exact path="/add_event" component={addEventContainer} />
        <Route exact path="/events/:title" component={EventDetails}  />
        <Route exact path="/search" component={SearchEvent}  />
      </Switch>
    </Router>
  </Provider>
)

export default App;