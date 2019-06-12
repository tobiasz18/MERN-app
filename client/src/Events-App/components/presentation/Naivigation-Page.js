import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Logo, Nav, Ul, NavContainer, ResponsiveMenu }  from '../../styled-components/navigation-theme';
import search from '../../img/search.png';
import { useHideOnScrolled } from '../../helpers/useEffectHookFixedNav';

const Navigation = () => {
 // const padding = useHideOnScrolled(useState, useEffect, 92);
  
  const [padding, setPadding] = useState(false);
  const [menuResp, setMenuResp] = useState(false);

  const handleScroll = () => {
    const top = window.pageYOffset || document.documentElement.scrollTop;
    setPadding(top > 92); 
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Nav positionProp={padding}>
      <ResponsiveMenu onClick={() => setMenuResp(!menuResp)}>&#9776;</ResponsiveMenu>
      <NavContainer>
        <Link style={{color: 'black'}} to="/"><Logo>Events Home</Logo></Link>
        <Ul setDisplay={menuResp}>
          <li>
            <Link to="/">Events</Link>
          </li>
          <li>
            <Link to="/search">Search </Link> 
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


/*
<img src={search} width="15px"/>
*/ 