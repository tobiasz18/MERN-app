import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  margin-top: 25px;
  padding-bottom: 10px;
  border-bottom: 1px solid #DDD!important;
`
export const Image = styled.div`
  width: 300px;
  display: flex;

  img {
    width: 100%;
    height: 100%;
    flex-grow: 1;
  }
`
export const Text = styled.div`
   padding-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

  div > a {
    color: black;
    font-weight: 600;
    font-size: 18px;
    letter-spacing: 0.3px;

    &:hover {
    
      color: #40a3d3;
    }
  }
  div > p {
    color: #524d46;
  } 
  div > div {
    color: #9e2a2a;
  }
`

