import React from 'react';
import { Figure, Span } from '../../styled-components/SearchSingleEvent.styled';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";

const SearchSingleEvent = ({image, title, titleText}) => {
  return (
      <Figure>    
        <Helmet>
          <title>{titleText} - Search location</title>
        </Helmet>
    
        <Link to={`/events/${title}`}>
          <img src={image} alt="smile.png"  /> 
          <div>
            <Span>{title}</Span>
          </div>
        </Link> 
      </Figure>
      )
  } 
export default SearchSingleEvent; 