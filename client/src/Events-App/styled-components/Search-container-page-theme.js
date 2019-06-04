import styled from 'styled-components';

export const ContainerArticle = styled.article`
  @import url('https://fonts.googleapis.com/css?family=Stylish&display=swap');
  font-family: 'Source Sans Pro', sans-serif;

  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 678px;

  h2 {
    font-weight: 100;
  }
`

export const ContainerSection1 = styled.section`
  padding: 50px 47px;
  width: 100%;
  text-align: center;
  background-color: #ffffff;
  box-sizing: border-box;
  box-shadow: 0 2px 7px white;

  input {
    background: #1a1a1a;
    border: 1px solid #e2dddd;
    padding: 10px 32px;
    font-size: 17px;
    outline-color: #ff8628;
    color: white;
  }

  a {
    background: #fd6600;
    border: 0;
    cursor: pointer;
    padding: 11px 30px;
    margin-left: 10px
    color: #fff;
    font-size: 17px;
    text-decoration: none;
  }

`

export const ContainerSection2 = styled.section`
  display: flex;
  flex-wrap: wrap;
  max-width: 970px;
  margin-bottom: 75px;
  margin-top: 75px;

`

