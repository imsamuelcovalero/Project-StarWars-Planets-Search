import React, { useState, useContext, useEffect } from 'react';
import PlanetsContext from '../context/PlanetsContext';
// import useCombineFilter from '../hooks/useCombineFilter';

function OrderFilter() {
  const [orderColumn, setOrderColumn] = useState('population');
  const [orderSort, setOrderSort] = useState('');
  const [order, setOrder] = useState({
    column: 'population',
    sort: 'ASC',
  });

  const { initialData, setData } = useContext(PlanetsContext);

  // function SortArray(x, y) {
  //   return x.order.column.localeCompare(y.order.column);
  // }

  useEffect(() => {
    if (order.sort === 'ASC') {
      const unknownPlanets = initialData
        .filter((planet) => planet[order.column] === 'unknown');
      const knownPlanets = initialData
        .filter((planet) => planet[order.column] !== 'unknown');
      knownPlanets.sort((a, b) => Number(a[order.column]) - (Number(b[order.column])));
      // console.log('knownPlanets', knownPlanets);
      setData([...knownPlanets, ...unknownPlanets]);
    } else if (order.sort === 'DESC') {
      const unknownPlanets = initialData
        .filter((planet) => planet[order.column] === 'unknown');
      const knownPlanets = initialData
        .filter((planet) => planet[order.column] !== 'unknown');
      knownPlanets.sort((a, b) => Number(b[order.column]) - (Number(a[order.column])));
      // console.log('knownPlanets', knownPlanets);
      setData([...knownPlanets, ...unknownPlanets]);
    }
  }, [setData, order]);

  const HandleOrder = (event) => {
    event.preventDefault();
    // console.log('entrou em HandleOrder');
    console.log(orderSort);
    console.log(order);
    const newOrderSort = {
      column: orderColumn,
      sort: orderSort,
    };
    console.log('newOrderSort', newOrderSort);
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
    <div>
      <label htmlFor="select-orderColumn">
        Ordenar:
        <select
          data-testid="column-sort"
          id="select-order"
          name="orderColumn"
          value={ orderColumn }
          onChange={ ({ target }) => setOrderColumn(target.value) }
        >
          <option>population</option>
          <option>orbital_period</option>
          <option>diameter</option>
          <option>rotation_period</option>
          <option>surface_water</option>
        </select>
      </label>
      <label htmlFor="select-orderSortAsc">
        <div>
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
        </div>
        <div>
          <input
            data-testid="column-sort-input-desc"
            type="radio"
            id="select-orderSortAsc"
            name="sortDesc"
            value="DESC"
            checked={ orderSort === 'DESC' }
            onChange={ ({ target }) => setOrderSort(target.value) }
            onClick={ HandleClick }
          />
          DESC
        </div>
      </label>
      <button
        data-testid="column-sort-button"
        type="submit"
        onClick={ HandleOrder }
      >
        Ordenar
      </button>
    </div>
  );
}

export default OrderFilter;
