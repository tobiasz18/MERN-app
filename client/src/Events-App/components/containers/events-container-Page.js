import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { getEvents } from '../../actions';
import { Article } from '../../styled-components/eventsContainer-theme';
import EventsList from '../presentation/EventsList';

import eclipse from '../../img/eclipse.svg'

import {Helmet} from "react-helmet";
class EventsContainer extends Component {

  componentDidMount = () => {
    this.props.getEvents()
    document.getElementsByTagName('nav')[0].style.position ='fixed';
  }

  componentWillUnmount = () => {
    document.getElementsByTagName('nav')[0].style.position ='inherit';
  }

  checkLengthDesc = (paragraph) => {
    if(paragraph.length > 50) {
      return `${paragraph.slice(0,160)}`
    }
    return paragraph
  }

  render() {
    const { loading, events } = this.props;
    
    return (
      <Article loading={loading}>   
        <Helmet>
          <title>Home - Events page</title>
        </Helmet>
        {
          loading ? 
          <div style={{
                'display': 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative'
              }}>
                <h2 style={{position: 'absolute',
                  fontFamily: 'sansSerif',
                  color: 'grey',
                  top: '46%'}}>Loading
                </h2>
                <img width="175px" src={eclipse} />
              </div>
             :
            events.map(item => <EventsList 
              key={item.id} 
              title={item.title} 
              desc={item.desc} 
              checkLengthDesc={this.checkLengthDesc} 
              location={item.location} 
              image={item.imageUrl}/>).reverse()            
            }
      </Article>
    )
  }
}

const mapStateToProps = state => ({
  events: Object.values(state.events),
  loading: state.loading
}) 

export default connect(mapStateToProps, {getEvents})(EventsContainer);