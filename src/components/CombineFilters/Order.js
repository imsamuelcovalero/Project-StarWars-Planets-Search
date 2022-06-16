import React, { useContext } from 'react';
import PlanetsContext from '../../context/PlanetsContext';

function Order() {
  const { orderColumn, setOrderColumn } = useContext(PlanetsContext);

  return (
    <label htmlFor="select-orderColumn">
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
  );
}

export default Order;
