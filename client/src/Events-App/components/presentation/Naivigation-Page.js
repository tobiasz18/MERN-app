import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Logo, Nav, Ul, NavContainer }  from '../../styled-components/navigation-theme';
import search from '../../img/search.png'
import { Z_BLOCK } from 'zlib';

const Navigation = () => {

  const useHideOnScrolled = () => {
    const [hidden, setHidden] = useState(false);
  
    const handleScroll = () => {
      const top = window.pageYOffset || document.documentElement.scrollTop;
      setHidden(top > 200);
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    return hidden;
  };
  const hidden = useHideOnScrolled();
  const animated = hidden ? {
    position: 'fixed',
    width: '100%',
    padding: 0,

  } : {
    transition:'0.14s',
    position: 'inherit'
  }

  return (
    <Nav style={animated}>
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
