import React, { Component } from 'react';
import { Section } from '../../styled-components/eventsContainer-theme';
import { connect } from 'react-redux';
import { getEventByTitle } from '../../actions';


class EventDetails extends Component {

  componentDidMount = () => {
   const title = this.props.match.params.title.replace(/_/g, ' ')
   this.props.getEventByTitle(title)
  }

  render() {
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