import React from 'react';
import { connect } from 'react-redux';
import { getEventByLocation } from '../../actions';
import SearchSingleEvent from '../presentation/SearchSingleEvent';

class EventSearchList extends React.Component {

  componentDidMount = () => {
    console.log(this.props.match.params.location)
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
            key={item.id} titleText={this.props.match.params.location}  image={item.imageUrl} title={item.title} />) 
        }
        { this.props.searchEvents == 0 && 
          <h2>No results for "{/*space*/}
            <span style={{fontWeight: '600'}}>
              {this.props.match.params.location} 
            </span> " location
          </h2> } 
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  if(state.searchEvents) {
    return {
      searchEvents: Object.values(state.searchEvents)
    }
  } 
  return {
    searchEvents: []
  }
}
 
export default connect(mapStateToProps, {getEventByLocation})(EventSearchList);