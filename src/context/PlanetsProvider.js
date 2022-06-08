import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

const SW_API = 'https://swapi-trybe.herokuapp.com/api/planets/';

function PlanetsProvider({ children }) {
  // console.log('entrou em PlanetsProvider');
  const [data, setData] = useState([]);
  const [initialData, setinitialData] = useState([]);
  const [error, setError] = useState('');
  // const [dataFiltered, setDataFiltered] = useState([]);

  useEffect(() => {
    const getPlanets = async () => {
      console.log('entrou em getPlanets');
      try {
        const response = await fetch(SW_API);
        const { results } = await response.json();
        // console.log('results', results);
        const resultsFiltered = results.map((element) => {
          delete element.residents;
          return element;
        });
        // console.log('resultsFiltered', resultsFiltered);
        setinitialData(resultsFiltered);
        setData(resultsFiltered);
      } catch (errorRequest) {
        setError(errorRequest);
      }
    };
    getPlanets();
  }, []);

  // useEffect(() => {
  //   setData();
  // }, [data]);

  const contextValue = {
    data,
    setData,
  };

  return (
    <PlanetsContext.Provider value={ contextValue }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
