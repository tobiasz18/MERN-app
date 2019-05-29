import React from 'react';
import { Figure } from '../../styled-components/SearchSingleEvent-theme';
import { Link } from 'react-router-dom';

const SearchSingleEvent = ({image, title}) => (
  <Figure>
    <Link to={`/events/${title}`}>
      <img src={image} />
      <div>
        <span>{title}</span>
      </div>
    </Link>
  </Figure>
)

export default SearchSingleEvent;