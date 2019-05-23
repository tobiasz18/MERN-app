import React from 'react';
import { Link } from 'react-router-dom'
import { Logo, Nav, Ul, NavContainer}  from '../../styled-components/navigation-theme';
import search from '../../img/search.png'

const Navigation = () => (
  <Nav>
    <NavContainer>
      <Logo>Events Api</Logo>
      <Ul>
        <li>
          <Link>Events</Link>
        </li>
        <li>
          <Link>Search <img src={search} width="15px"/></Link> 
        </li>
        <li>
          <Link>Add event</Link>
        </li>
      </Ul>
    </NavContainer> 
  </Nav>
)

export default Navigation;