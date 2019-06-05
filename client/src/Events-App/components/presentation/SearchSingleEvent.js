import React from 'react';
import { Figure } from '../../styled-components/SearchSingleEvent-theme';
import { Link } from 'react-router-dom';
import {Helmet, Child} from "react-helmet";

const SearchSingleEvent = ({image, title, titleText}) => (
  <Figure>    
    <Helmet>
      <title>{titleText} - Search location</title>
    </Helmet>

    <Link to={`/events/${title}`}>
      <img src={image} /> 
      <div>
        <span>{title}</span>
      </div>
    </Link> 
  </Figure>
)

export default SearchSingleEvent;