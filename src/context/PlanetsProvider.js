import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

const SW_API = 'https://swapi-trybe.herokuapp.com/api/planets/';

function PlanetsProvider({ children }) {
  // console.log('entrou em PlanetsProvider');
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const getPlanets = async () => {
      console.log('entrou em getPlanets');
      try {
        const response = await fetch(SW_API);
        const { results } = await response.json();
        console.log('results', results);
        const resultsFiltered = Object.keys(results[0])
        // console.log('resultsArray', resultsArray);
          .filter((element) => element !== 'residents');
        console.log('resultsFiltered', resultsFiltered);
        return setData(resultsFiltered);
      } catch (errorRequest) {
        setError(errorRequest);
      }
    };
    getPlanets();
  }, []);

  const contextValue = {
    data,
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
