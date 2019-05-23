import styled from 'styled-components';

export const Nav = styled.nav`
  border-bottom: 1px solid #f9f9f9;
  background: #fdfdfd;

`
export const NavContainer = styled.div`
  max-width: 970px;
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
`
export const Ul = styled.ul`
  display: flex;
  list-style-type: none;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 600;
  
  li {
    padding-right: 25px;
    
    a {
      text-decoration: none;
      color: #0e0e0e;
      letter-spacing: 0.8px;
      padding-right: 3px;

      &:hover {
        color: #333131bd;
      }     
    }
  }

 li:last-child a {
   color: #ff7e28;
 }
`
