import React, { Component } from 'react';
import { Section } from '../../styled-components/eventsContainer-theme';
import { connect } from 'react-redux';
import { getEventByTitle } from '../../actions';


class EventDetails extends Component {

  componentDidMount = () => {
   console.log(this.props.match.params.title.replace(/_/g, ' '), "Carnival of Venice: masked fete (Italy) ")
   const title = this.props.match.params.title.replace(/_/g, ' ')
   this.props.getEventByTitle(title)
  }

  render() {
    console.log(this.props, 'events details')
    const {title, desc, imageUrl} = this.props.singleEvent
    return (
      <div>
        <h1>{title}</h1>
        <p>{desc}</p>
        <img src={imageUrl} width="300px" />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  singleEvent: state.singleEvent,
  loading:  state.loading
})

export default connect(mapStateToProps, {getEventByTitle})(EventDetails)