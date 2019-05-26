import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getEventByLocation } from '../../actions';
import EventsList from '../presentation/EventsList';
import { Article } from '../../styled-components/global-theme';

class SearchEvent extends Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  handleChange = () => {
    const value = this.textInput.current.value;
    return value;
  }

  handleSubmit = () => {
    this.props.getEventByLocation(this.handleChange())
    this.textInput.current.value = ''
  }

  render() {
    return (
      <Article>
        <input type="text" placeholder="search by location" ref={this.textInput} onChange={this.handleChange}/>
        <button type="submit"onClick={this.handleSubmit}>Submit</button>

        {
          this.props.searchEvents.map(item => <EventsList key={item.id} 
            title={item.title} desc={item.desc} location={item.location} image={item.imageUrl}/>)
        }
      </Article>
    )
  }
}

const mapStateToProps = state => ({
  searchEvents: state.searchEvents
})

export default connect(mapStateToProps, {getEventByLocation})(SearchEvent) 

