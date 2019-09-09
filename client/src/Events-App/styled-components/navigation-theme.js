import styled, {css} from 'styled-components';
import {media} from './RWD-media'; // rwd template's

export const Nav = styled.nav`
  transition: 0.3s;
  box-shadow: rgba(0,0,0,.117647) 0 1px 3px;
  background: #fff;
  padding: ${props => props.positionProp ? '3px 0' : '7px 0'}
  width: 100%;
  z-index: 1;
  top: 0;
`

/*
  ${media.desktop`background: dodgerblue;`}
  ${media.tablet`background: mediumseagreen;`}
  ${media.phone`background: palevioletred;`}

*/ 

export const NavContainer = styled.div`
  max-width: 1100px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto; 
  ${media.phone`flex-direction: column;`}

  a {
    text-decoration: none;
  }
`
export const Logo = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Stylish&display=swap');
  font-size: 25px;
  font-family: 'Stylish', sans-serif;
  color: #646a6d;

`
export const Ul = styled.ul`
  display: flex;
  list-style-type: none;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 400;
  font-size: 18px;
  
  li {
    padding-right: 30px;
    
    a {
      text-decoration: none;
      color: #848b8e;
      letter-spacing: 0.8px;
      padding-right: 3px;

      &:hover {
        color: #ff7e28;
      }     
    }
  }

 li:last-child a {
   color: #357FC1;
   font-weight: 700;
 }

 ${media.phone`${props => props.setDisplay ? templateRespMenu : 'display: none'}`}
`
const templateRespMenu = css`
  display:flex;
  flex-direction: column;
  padding: 0;
`

// responsive menu
export const ResponsiveMenu = styled.div`
    color: #646a6d;
    float: right;
    padding-right: 10px;
    font-size: 23px;
    cursor: pointer;
    display: none;
    padding: 0 20px;
    
    ${media.phone`display: block; `}

` 







