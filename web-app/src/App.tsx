import React from 'react';
import styled from 'styled-components';
import MainContainer from './components/Main/Main';

const AppStyles = styled.div`
  height: 100%;
  width: 100%;
  margin: 0;
`;

const App = () => (
  <AppStyles>
    <MainContainer/>
  </AppStyles>
);

export default App;
