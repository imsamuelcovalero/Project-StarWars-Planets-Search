import React, { useState, useContext, useEffect } from 'react';
import PlanetsContext from '../../context/PlanetsContext';
import { FiltersDiv } from './Style';
import Comparison from './Comparison';
import Order from './Order';

function CombineFilters() {
  const [column, setColumn] = useState('population');
  // const [comparison, setComparison] = useState('maior que');
  // const [orderColumn, setOrderColumn] = useState('population');
  const [number, setNumber] = useState(0);
  const [orderSort, setOrderSort] = useState('');
  const [order, setOrder] = useState({
    column: 'population',
    sort: 'ASC',
  });

  const { columns, setFilteredData, initialData, setData, setColumns, filteredData,
    setHasFilter, comparison, setComparison, orderColumn } = useContext(PlanetsContext);

  const HandleSubmit = (event) => {
    event.preventDefault();
    const filterElement = { column, comparison, number };
    setFilteredData([...filteredData, filterElement]);
    setHasFilter(true);
    const columnsFiltered = columns.filter((elements) => elements !== column);
    setColumns(columnsFiltered);

    setColumn('population');
    setComparison('maior que');
    setNumber(0);
  };

  const HandleDeleteAll = (event) => {
    event.preventDefault();
    setFilteredData([]);
    setData(initialData);
    setHasFilter(false);
  };

  const HandleSort = () => {
    if (order.sort === 'ASC') {
      const unknownPlanets = initialData
        .filter((planet) => planet[order.column] === 'unknown');
      const knownPlanets = initialData
        .filter((planet) => planet[order.column] !== 'unknown');
      knownPlanets.sort((a, b) => Number(a[order.column]) - (Number(b[order.column])));
      setData([...knownPlanets, ...unknownPlanets]);
    } else if (order.sort === 'DESC') {
      const unknownPlanets = initialData
        .filter((planet) => planet[order.column] === 'unknown');
      const knownPlanets = initialData
        .filter((planet) => planet[order.column] !== 'unknown');
      knownPlanets.sort((a, b) => Number(b[order.column]) - (Number(a[order.column])));
      setData([...knownPlanets, ...unknownPlanets]);
    }
  };

  useEffect(HandleSort, [setData, order, initialData]);

  const HandleOrder = (event) => {
    event.preventDefault();
    const newOrderSort = {
      column: orderColumn,
      sort: orderSort,
    };
    setOrder(newOrderSort);
  };

  const HandleClick = ({ target }) => {
    if (target.value === orderSort) {
      setOrderSort('');
    } else {
      setOrderSort(target.value);
    }
  };

  return (
    <FiltersDiv>
      <form>
        <div>
          <p>Coluna:</p>
          <label htmlFor="select-column">
            <select
              data-testid="column-filter"
              id="select-column"
              name="column"
              value={ column }
              onChange={ ({ target }) => setColumn(target.value) }
            >
              {
                columns.map((selectOption, index) => (
                  <option key={ index }>{selectOption}</option>
                ))
              }
            </select>
          </label>
        </div>
        <div>
          <p>Comparação:</p>
          <Comparison />
        </div>
        <label htmlFor="input-numbers">
          <input
            data-testid="value-filter"
            id="input-numbers"
            name="number"
            value={ number }
            type="number"
            onChange={ ({ target }) => setNumber(target.value) }
          />
        </label>
        <button
          data-testid="button-filter"
          type="submit"
          onClick={ HandleSubmit }
        >
          FILTRAR
        </button>
        <div>
          <p>Ordenar:</p>
          <Order />
        </div>
        <div id="radio">
          <label htmlFor="select-orderSortAsc">
            <input
              data-testid="column-sort-input-asc"
              type="radio"
              id="select-orderSortAsc"
              name="sortAsc"
              value="ASC"
              checked={ orderSort === 'ASC' }
              onChange={ ({ target }) => setOrderSort(target.value) }
              onClick={ HandleClick }
            />
            ASC
          </label>
          <label htmlFor="select-orderSortDesc">
            <input
              data-testid="column-sort-input-desc"
              type="radio"
              id="select-orderSortDesc"
              name="sortDesc"
              value="DESC"
              checked={ orderSort === 'DESC' }
              onChange={ ({ target }) => setOrderSort(target.value) }
              onClick={ HandleClick }
            />
            DESC
          </label>
        </div>
        <button
          data-testid="column-sort-button"
          type="submit"
          onClick={ HandleOrder }
        >
          ORDENAR
        </button>
        <button
          data-testid="button-remove-filters"
          type="submit"
          onClick={ HandleDeleteAll }
        >
          REMOVER FILTROS
        </button>
      </form>
    </FiltersDiv>
  );
}

export default CombineFilters;
