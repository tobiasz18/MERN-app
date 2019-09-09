import styled from 'styled-components';

export const Figure =  styled.figure`
  flex: 0 1 48%;
  position: relative;
  margin: 1%;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }

  div {
    position: absolute;
    color: #fff;
    bottom: 0px;
    width: 100%;
    text-align: center;
    font-size: 20px;
    height: 100%;
    opacity: 0.8;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6) );
    display: flex;
    justify-content: center;
    align-items: flex-end;

    &:hover  {
      text-decoration: underline;
      opacity: 1;
    }
  }
`

export const Span = styled.span`
    @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap');
    padding: 10px;
    -webkit-text-decoration: none;
    text-decoration: none;
    color: #fff;
    font-family: Lato,sans-serif;
    width: 100%;
    font-size: 18px;
    font-weight: 600;
   
`