import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { getEvents } from '../../actions';
import { Article } from '../../styled-components/global-theme';
import EventsList from '../presentation/EventsList';

class EventsContainer extends Component {

  componentDidMount() {
    this.props.getEvents()
  }

  render() {
    const { loading, events } = this.props;
    return (
      <Article>     
        {
          loading ? 
            <h5>Loading...</h5> :
            events.map(item => <EventsList key={item.id} 
              title={item.title} desc={item.desc} location={item.location} image={item.imageUrl}/>).reverse()
        }
      </Article>
    )
  }
}

const mapStateToProps = state => ({
  events: state.events,
  loading: state.loading
}) 

export default connect(mapStateToProps, {getEvents})(EventsContainer);