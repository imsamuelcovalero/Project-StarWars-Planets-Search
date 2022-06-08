import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

const SW_API = 'https://swapi-trybe.herokuapp.com/api/planets/';

function PlanetsProvider({ children }) {
  // console.log('entrou em PlanetsProvider');
  const [data, setData] = useState([]);
  const [initialData, setInitialData] = useState([]);
  const [filterText, setFilterText] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [hasFilter, setHasFilter] = useState(false);
  const [columns, setColumns] = useState(['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water']);

  useEffect(() => {
    const getPlanets = async () => {
      // console.log('entrou em getPlanets');
      try {
        const response = await fetch(SW_API);
        const { results } = await response.json();
        // console.log('results', results);
        const resultsFiltered = results.map((element) => {
          delete element.residents;
          return element;
        });
        // console.log('resultsFiltered', resultsFiltered);
        setInitialData(resultsFiltered);
        setData(resultsFiltered);
      } catch (errorRequest) {
        console.log(errorRequest);
      }
    };
    getPlanets();
  }, []);

  useEffect(() => {
    const newData = initialData
      .filter(({ name }) => name.toLowerCase().includes(filterText));
    // console.log('newData', newData);
    setData(newData);
  }, [filterText, initialData, setData]);

  const combineFilter = (column, comparison, number) => {
    console.log('xablau_provider', column, comparison, number);
    const combineFilterResult = data.filter((planet) => {
      if (comparison === 'maior que') {
        return Number(planet[column] > Number(number));
      } if (comparison === 'menor que') {
        return Number(planet[column] < Number(number));
      }
      return (Number(planet[column]) === Number(number));
    });
    const filterElement = { column, comparison, number };
    // console.log(filterElement);
    setFilteredData([...filteredData, filterElement]);
    setHasFilter(true);
    setData(combineFilterResult);
    const columnsFiltered = columns.filter((elements) => elements !== column);
    setColumns(columnsFiltered);
  };

  // const newFilteredCombine = (filtersUpated) => {
  //   // console.log(filteredData);
  //   let xablau = initialData;
  //   filtersUpated.forEach((filterEl) => {
  //     console.log(filterEl);
  //     xablau = xablau.filter((planet) => {
  //       if (filterEl.comparison === 'maior que') {
  //         return Number(planet[filterEl.column]) > Number(filterEl.number);
  //       } if (filterEl.comparison === 'menor que') {
  //         return Number(planet[filterEl.column]) < Number(filterEl.number);
  //       }
  //       return (Number(planet[filterEl.column]) === Number(filterEl.number));
  //     });
  //   });
  //   setData(xablau);
  // };

  useEffect(() => {
    let xablau = initialData;
    filteredData.forEach((filterEl) => {
      console.log(filterEl);
      xablau = xablau.filter((planet) => {
        if (filterEl.comparison === 'maior que') {
          return Number(planet[filterEl.column]) > Number(filterEl.number);
        } if (filterEl.comparison === 'menor que') {
          return Number(planet[filterEl.column]) < Number(filterEl.number);
        }
        return (Number(planet[filterEl.column]) === Number(filterEl.number));
      });
    });
    setData(xablau);
  }, [filteredData, initialData]);

  const contextValue = {
    data,
    setData,
    filterText,
    setFilterText,
    combineFilter,
    hasFilter,
    filteredData,
    columns,
    setFilteredData,
    setColumns,
    initialData,

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
