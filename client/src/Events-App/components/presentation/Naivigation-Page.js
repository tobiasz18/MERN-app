import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Logo, Nav, Ul, NavContainer }  from '../../styled-components/navigation-theme';
import search from '../../img/search.png';
import { useHideOnScrolled } from '../../helpers/useEffectHook';

const Navigation = () => {
  const hidden = useHideOnScrolled(useState, useEffect);
  
  return (
    <Nav positionProp={hidden}>
      <NavContainer>
        <Link style={{color: 'black'}} to="/"><Logo>Events Home</Logo></Link>
        <Ul>
          <li>
          <Link to="/">Events</Link>
          </li>
          <li>
            <Link to="/search">Search <img src={search} width="15px"/></Link> 
          </li>
          <li>
            <Link to="/add_event">Add event</Link>
          </li>
        </Ul>
      </NavContainer> 
 
    </Nav>
  )
}

export default Navigation;
