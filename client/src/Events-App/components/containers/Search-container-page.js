import React from 'react';
import { Route, Link } from 'react-router-dom';
import EventSearchList from './Search-event-list-container';
import { ContainerArticle, ContainerSection1, ContainerSection2 } from '../../styled-components/Search-container-page-theme';
import { connect } from 'react-redux';
import { getEvents } from '../../actions';
import Notfound from '../presentation/NotFound';
import {Helmet} from "react-helmet";
class SearchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.location.pathname.split('/')[2],
      text: ''
    }
    this.myRef = React.createRef();
  }

  componentDidMount = () => this.props.getEvents()

  handleChange = () => {
    const value = this.myRef.current.value;
    this.setState({value})
  }

  render() {
    const checkPath = this.state.value ? `${this.props.match.url}/${this.state.value}` : '/search';
    return (
      <ContainerArticle>
        <Helmet>
          <title>Search by location - Events page</title>
        </Helmet>
        <ContainerSection1>   
          <input 
            type="text" 
            ref={this.myRef} 
            value={this.state.value} 
            placeholder="Search by location" 
            onChange={this.handleChange} 
          />
          <Link to={checkPath}>Search</Link>    
        </ContainerSection1>  
        <ContainerSection2>
          <Route exact path={`${this.props.match.url}/:location`} component={EventSearchList}/>
        </ContainerSection2>
      </ContainerArticle> 
    )
  }
} 



export default connect(null, {getEvents})(SearchContainer);