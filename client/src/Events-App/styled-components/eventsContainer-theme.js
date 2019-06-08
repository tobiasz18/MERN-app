import styled from 'styled-components';


export const Section = styled.section`
  border-bottom: 1px solid #0000000f;
  padding: 100px 0 3px 0;
  max-height: 250px;
  background: #fdfdfd;
  padding: 50px;
`

export const Article = styled.article`
  display: flex;
  justify-content: center;

  font-family: 'Source Sans Pro', sans-serif;
  max-width: 1100px;
  min-height: 780px;
  padding: 0 20px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  background: ${props => props.loading ? '#f8f8f8' : 'white'};
  justify-content: ${props => props.loading ? 'center' : 'none'};
  margin-top: 150px;
  box-shadow: ${props => props.loading ? 'none' : '14px 3px 16px #f1f1f1'};




`


/*

    display: flex;
    justify-content: center;

    To center loader


*/ 