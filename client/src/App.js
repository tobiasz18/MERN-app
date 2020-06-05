import React from 'react';
import { Provider } from 'react-redux';
import store from './store'
import Navigation from './components/presentation/NaivigationPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EventsContainer from './components/containers/EventsContainerPage';
import AddEventContainer from './components/containers/AddEventContainerPage';
import EventDetailsContainer from './components/containers/DetailsEventsContainerPage';
import SearchContainer from './components/containers/SearchContainerPage';
import EditEventContainer from './components/containers/EditEventContainer';
import Notfound from './components/presentation/NotFound';
import Footer from './components/presentation/Footer';

const App = () => (
  <Provider store={store}>
    <Router>
      <Navigation />
        <Switch>
          <Route exact path="/" component={EventsContainer} />
          <Route  path="/add_event" component={AddEventContainer} />
          <Route  path="/events/:title" component={EventDetailsContainer}  />
          <Route  path='/search' component={SearchContainer} />
          <Route  path="/edit/:id" component={EditEventContainer} />
          <Route  component={Notfound} />
        </Switch>
      <Footer />
    </Router>
  </Provider>
)

export default App;