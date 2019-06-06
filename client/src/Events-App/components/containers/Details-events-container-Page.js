import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getEventByTitle, removeEvent, getEvents } from '../../actions';


import { Helmet } from 'react-helmet';
import DetailEvent from '../presentation/DetailsSingleEvent';
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
        {this.state.data ? <DetailEvent removeEvent={this.removeEvent} event={this.state.data}/> : <h1>Loading...</h1> 
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