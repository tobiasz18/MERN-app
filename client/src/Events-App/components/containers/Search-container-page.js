import React from 'react';
import { Anchor, Div1, Div2, Section } from '../../styled-components/SearchListEvent-theme';

import { Route, Link } from 'react-router-dom';
import EventSearchList from './Search-event-list-container';
import { Button } from '../../styled-components/EventsList-theme';

class SearchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.location.pathname.split('/')[2]
    }
    this.myRef = React.createRef();
  }

  handleChange = () => {
    const value = this.myRef.current.value;
    this.setState({value})
  }

  render() {
    return (
      <div>
        <h2>SearchEvent</h2>
        <input 
          type="text" 
          ref={this.myRef} 
          value={this.state.value} 
          placeholder="Search by location" 
          onChange={this.handleChange} 
        />
       <Button> <Link to={`${this.props.match.url}/${this.state.value}`}>
          Search
        </Link></Button>
        <Route path={`${this.props.match.url}/:location`} component={EventSearchList}/>
      </div>
    )
  }
} 



export default SearchContainer;