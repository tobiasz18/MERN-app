import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getEventByTitle, removeEvent, getEvents } from '../../actions';
import { Article } from '../../styled-components/global-theme';
import { Img, Section, SpanHeader } from '../../styled-components/Details-events-Page-theme';
import { Link } from 'react-router-dom';
class EventDetailsContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
  }

  componentDidMount = () => {
   const title = this.props.match.params.title.replace(/_/g, ' ')
    console.log('titie', title)
   this.props.getEventByTitle(title)
 
  }

  componentDidUpdate = (prevProps) => {
    // To prevent loadig the same data during substitution 
    if (this.props.singleEvent !== prevProps.singleEvent) {
      this.setState({data: this.props.singleEvent[0]})
    }
  }

  removeEvent = () => {
    if(this.state.data) {
      this.props.removeEvent(this.state.data.id)
      this.props.history.push('/')
      this.props.getEvents()
    } else {
      alert('Something wrong, wait a little')
    }
  }
  
  render() {
    return (
      <Article>
        {this.state.data ? 
          <Section>
            <SpanHeader>{this.state.data.title}</SpanHeader>
            <p>{this.state.data.desc}</p>
            <Img src={this.state.data.imageUrl} />
            <p>Location: {this.state.data.location}</p>
            <p>Date event: {this.state.data.date}</p>
            <p>Organizers by {this.state.data.organization}</p>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <Link to={`/edit/${this.state.data.id}`}>Edit</Link>
              <button  style={{dosplay: 'flex'}} onClick={this.removeEvent}>Remove</button>
            </div>         
          </Section> :
          <h1>Loading...</h1> 
         }               
      </Article>
    )
  }
}

const mapStateToProps = state => ({
  singleEvent: Object.values(state.singleEvent),
  loading:  state.loading
})

export default connect(mapStateToProps, {getEventByTitle, getEvents, removeEvent})(EventDetailsContainer)