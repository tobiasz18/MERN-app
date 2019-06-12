import React from 'react';
import styled from 'styled-components';
import { Helmet } from "react-helmet";

const NotFoundContainer = styled.div`
  text-align: center;
  margin-top: 20%;
  font-family: sans-serif;
  line-height: 0;
  min-height: 450px;
  h1 {
    font-size: 90px;
    font-weight: 500;
  }

  p {
    font-size: 31px;
  }
`
const Notfound = () => (
  <NotFoundContainer>
    <Helmet>
      <title>Page not found - events page</title>
    </Helmet>
    <h1>404</h1>
    <p>Page not found</p>
  </NotFoundContainer>
)

export default Notfound;