import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { getEvents } from '../../actions';
import { Article } from '../../styled-components/eventsContainer-theme';
import SingleEvent from '../presentation/SingleEventOnList';

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
            events.map(item => <SingleEvent key={item.id} 
              title={item.title} desc={item.desc} image={item.imageUrl}/>).reverse()
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