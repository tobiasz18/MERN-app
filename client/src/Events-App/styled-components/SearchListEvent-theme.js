import styled from 'styled-components';



export const Section = styled.article`
 
` 

export const Anchor = styled.div`
  width: 100%;
  max-width: 300px;
  max-height: 180px;
  position: relative;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  overflow: hidden;
  padding: 5px;

  float: left;

    &:hover {
      opacity: 0.8;

      div {
        text-decoration: underline;
      }
    }
  }
`

export const Div1 = styled.div`
  display: flex;
  background-color: rgb(240, 240, 240);

  background-repeat: no-repeat;
  background-position: center center;
`

export const Div2 = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
line-height: initial;
position: absolute;
bottom: 0px;
left: 0px;
right: 0px;
z-index: 3;
padding: 0px 10px 10px;


  color: rgb(255, 255, 255);
  width: 100%;
  text-shadow: rgba(0, 0, 0, 0.5) 0px 1px 4px;
  font-size: 20px;
  line-height: 24px;
  font-family: sans-serif;
`