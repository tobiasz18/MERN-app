import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getEventByTitle, removeEvent, getEvents } from '../../actions';

import { Img, Section, SpanHeader, Div } from '../../styled-components/Details-events-Page-theme';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
class EventDetailsContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
  }

  componentDidMount = () => {
   const title = this.props.match.params.title.replace(/_/g, ' ')
   this.props.getEventByTitle(title)
  }

  componentDidUpdate = (prevProps) => {
    // To prevent loadig the same data during substitution 
    if (this.props.singleEvent !== prevProps.singleEvent) {
      this.setState({data: this.props.singleEvent[0]})
    }
  }

  removeEvent = () => {
    if(this.state.data.removeFlag) {
      this.props.removeEvent(this.state.data.id)
      this.props.history.push('/')
      this.props.getEvents()
    } else {
      alert(`You can not delete older events, only those created by yourself`)
    }
  }

  render() {
    const titleText = this.state.data ? this.state.data.title : 'loading';

    return (
      <div>
        <Helmet>
          <title>{titleText} - Events page</title>
        </Helmet>
        {this.state.data ? 
          <Section>
            <Div>
              <Link to={`/edit/${this.state.data.id}`}>Edit</Link>  
              <button  style={{dosplay: 'flex'}} onClick={this.removeEvent}>Remove</button>            
            </Div>        
            <SpanHeader>{this.state.data.title}</SpanHeader>
            <p>Location: {this.state.data.location}</p>
            <Img src={this.state.data.imageUrl} />
            <p>Organizers by {this.state.data.organization}</p>
            <p>{this.state.data.desc}</p>  
            <p>Date event: {this.state.data.date}</p> 
          </Section>  : 
          <h1>Loading...</h1> 
         }               
      </div>
    )
  }
}

const mapStateToProps = state => ({
  singleEvent: Object.values(state.singleEvent),
  loading:  state.loading
})

export default connect(mapStateToProps, {getEventByTitle, getEvents, removeEvent})(EventDetailsContainer)