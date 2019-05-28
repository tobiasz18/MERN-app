import React from 'react';
import { connect } from 'react-redux';
import { getEventByLocation } from '../../actions';
import SearchSingleEvent from '../presentation/SearchSingleEvent';

class EventSearchList extends React.Component {

  static defaultProps = {
    searchEvents: []
  }

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
      <React.Fragment>
        {
          this.props.searchEvents.map(item => <SearchSingleEvent
            key={item.id} image={item.imageUrl} title={item.title} />)
        }
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  searchEvents: state.searchEvents,
  asd: state.events
})

export default connect(mapStateToProps, {getEventByLocation})(EventSearchList);