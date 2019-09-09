import styled from 'styled-components';

export const Img = styled.img`
  max-width: 800px;
  min-height: 360px
  max-height: 600px
  width: 100%;
  margin: 20px 0;
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
    letter-spacing: 0.3px;
    font-weight: 400px;
    font-weight: 400;
    font-family: 'Bree Serif', serif;
    overflow: hidden;
    line-height: 140%;
    max-width: 645px;
    margin: 0;
  }
`
export const SpanHeader = styled.span`
  font-weight: 400;
  font-family: 'Lato', sans-serif;
  color: #4a4a4a;
  font-size: 45px;
  margin: 20px 0;
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
    background: none;
    color: #000000;
    padding: 5px 20px;
    font-weight: 600;
    margin-right: 5px;
    font-family: 'Lato',sans-serif;

    &:hover {
      color: #e9a825;
    }
  }

  button {
    border: none;
    font-size: 15px;
    cursor: pointer;
    background: none;
    color: #000000;
    padding: 5px 20px;
    font-weight: 600;
    font-family: 'Lato',sans-serif;

    &:hover {
      color: #e9a825;
    }
  }
`
