import React from 'react';
import { Provider } from 'react-redux';
import store from './store'
import Navigation from './components/presentation/Naivigation-Page';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EventsContainer from './components/containers/events-container-Page';
import addEventContainer from './components/containers/addEvent-container-Page';
import EventDetailsContainer from './components/containers/Details-events-container-Page';
import SearchContainer from './components/containers/Search-container-page';
import EditEventContainer from './components/containers/Edit-event-container';
import Notfound from './components/presentation/NotFound';

const App = () => (
  <Provider store={store}>
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/" component={EventsContainer} />
        <Route  path="/add_event" component={addEventContainer} />
        <Route  path="/events/:title" component={EventDetailsContainer}  />
        <Route  path='/search' component={SearchContainer} />
        <Route  path="/edit/:id" component={EditEventContainer} />
        <Route  component={Notfound} />
      </Switch>
    </Router>
  </Provider>
)

export default App;