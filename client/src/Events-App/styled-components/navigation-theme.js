import styled from 'styled-components';

export const Nav = styled.nav`
  transition: '2s';
 /*border-bottom: 1px solid #e6e6e6;*/;
  box-shadow: 0 0 0.5rem rgba(83,78,76,.5);
  background: #1a1a1a;
  position: ${props => props.positionProp ? 'fixed' : 'inherit'}
  padding: ${props => props.positionProp ? ' 0' : '7px 0'}
  transition: ${props => props.positionProp ? '0.1s' : '0'}
  width: 100%;
  z-index: 1;
`
export const NavContainer = styled.div`
  max-width: 1100px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`
export const Logo = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Stylish&display=swap');
  font-size: 25px;
  font-family: 'Stylish', sans-serif;
  color: white;
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
      color: #fff;
      letter-spacing: 0.8px;
      padding-right: 3px;

      &:hover {
        color: #ff7e28;
      }     
    }
  }

 li:last-child a {
   color: #ff7e28;
 }
`
