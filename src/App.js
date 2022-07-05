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
    box-sizing: border-box;
  }
`;

const Div = styled.div`
  background-image: url(${background});
  background-attachment: fixed;
  position: relative;
  height: auto;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  // overflow: scroll;
  min-height: 100vh;
  width: 100vw;
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
