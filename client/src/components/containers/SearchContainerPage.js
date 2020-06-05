import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import EventSearchList from './SearchEventListContainer';
import { ContainerArticle, ContainerSection1, ContainerSection2 } from '../../styled-components/SearchContainerPage.styled';
import { connect } from 'react-redux';
import { getEvents } from '../../actions';

import {Helmet} from "react-helmet";
import DefaultStateSearchEventsList from '../presentation/DefaultStateSearchEventsList';
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
          <div><Link to={checkPath}>Search</Link></div> 
        </ContainerSection1>  
        <ContainerSection2>
          <Switch>
            <Route exact path={`/search`} component={DefaultStateSearchEventsList} />
            <Route exact path={`${this.props.match.url}/:location`} component={EventSearchList}/>
          </Switch>
        </ContainerSection2>
      </ContainerArticle> 
    )
  }
} 


export default connect(null, {getEvents})(SearchContainer);