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
    background: rgba(0,0,0,0.3);
    display: flex;
    justify-content: center;
    align-items: flex-end;

    span {
      @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap');
      padding: 10px;
      text-decoration: none;
      color: #fff;
      background: rgba(0,0,0,0.3);
      width: 100%;
      font-family: 'Roboto Condensed', sans-serif;
    }

    &:hover  {
      text-decoration: underline;
      opacity: 1;
    }
  }
`