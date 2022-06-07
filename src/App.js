import React from 'react';
import './App.css';
import Table from './components/Table';
import PlanetsProvider from './context/PlanetsProvider';

// Inicia o projeto
function App() {
  return (
    <PlanetsProvider>
      <span>Hello, App!</span>
      <Table />
    </PlanetsProvider>
  );
}

export default App;
