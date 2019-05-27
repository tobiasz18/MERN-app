import React from 'react';
import { connect } from 'react-redux';
import { getEventByLocation } from '../../actions';

class EventSearchList extends React.Component {

  componentDidMount = () => {
    this.props.getEventByLocation(this.props.match.params.location)
  }

  componentDidUpdate = (prevProps) => { //update wen component get new params
    if(prevProps.match.params.location !== this.props.match.params.location) {
      this.props.getEventByLocation(this.props.match.params.location)   
    }
  }

  render() {
    return (
      <div>
        {
          this.props.searchEvents.map(item => <div>{item.title}</div>)
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  searchEvents: state.searchEvents
})

export default connect(mapStateToProps, {getEventByLocation})(EventSearchList);