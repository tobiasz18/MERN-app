import React from 'react';
import { Route, Link } from 'react-router-dom';
import EventSearchList from './Search-event-list-container';
import { ContainerArticle, ContainerSection1, ContainerSection2 } from '../../styled-components/Search-page-theme';

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
      <ContainerArticle>
        <ContainerSection1>   
          <input 
            type="text" 
            ref={this.myRef} 
            value={this.state.value} 
            placeholder="Search by location" 
            onChange={this.handleChange} 
          />
          <Link to={`${this.props.match.url}/${this.state.value}`}>Search</Link>    
        </ContainerSection1>  
        <ContainerSection2>
          <Route path={`${this.props.match.url}/:location`} component={EventSearchList}/>
        </ContainerSection2>
      </ContainerArticle> 
    )
  }
} 



export default SearchContainer;