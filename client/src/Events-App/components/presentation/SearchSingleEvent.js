import React from 'react';
import { SingleContainer } from '../../styled-components/SearchSingleEvent-theme';
import { Link } from 'react-router-dom';

const SearchSingleEvent = ({image, title}) => (
  <SingleContainer>
    <Link to={`/events/${title}`}>
      <img src={image} />
      <div>
        <span>{title}</span>
      </div>
    </Link>
  </SingleContainer>
)

export default SearchSingleEvent;