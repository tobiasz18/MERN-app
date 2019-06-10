import styled from 'styled-components';

export const Img = styled.img`
  max-width: 800px;
  min-height: 360px
  width: 100%;
`
export const Section = styled.section`
  margin: auto;
  margin-top: 75px;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  padding: 0 15px;

  p {
    color: rgb(112, 112, 112);
    letter-spacing: 0.3px;
    font-weight: 400px;
    font-weight: 400;
    font-family: Sky Text,Sans-serif;
    overflow: hidden;
    line-height: 20px;
  }
`
export const SpanHeader = styled.span`
  line-height: 56px;
  font-weight: 400;
  font-family: Sky Text,Sans-serif;
  color: #4a4a4a;
  font-size: 2.3em;
`
export const Div = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 15px;

  a {
    text-decoration: none;
    border: none;
    font-size: 15px;
    cursor: pointer;
    background: #4c4a4a;
    color: #bbbbbb;
    padding: 5px 20px;
    font-weight: 600;
    margin-right: 5px;

    &:hover {
      color: white;
    }
  }

  button {
    border: none;
    font-size: 15px;
    cursor: pointer;
    background: #4c4a4a;
    color: #bbbbbb;
    padding: 5px 20px;
    font-weight: 600;

    &:hover {
      color: white;
    }
  }
`