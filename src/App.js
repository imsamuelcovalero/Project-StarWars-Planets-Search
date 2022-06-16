import React from 'react';
import './App.css';
import styled, { createGlobalStyle } from 'styled-components/';
import Table from './components/Table/Table';
import PlanetsProvider from './context/PlanetsProvider';
import background from './sw_main_background3.png';
// import trivia from './trivia.png';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0px;
    font-family: sans-serif;
    margin: 0px;
  }
`;

const Div = styled.div`
  // border: 1px solid #000;
  background-image: url(${background});
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

function App() {
  return (
    <PlanetsProvider>
      <Div>
        <GlobalStyle />
        <Table />
      </Div>
    </PlanetsProvider>
  );
}

export default App;
