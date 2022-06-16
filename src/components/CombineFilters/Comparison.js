import React, { useContext } from 'react';
import PlanetsContext from '../../context/PlanetsContext';

function Comparison() {
  const { comparison, setComparison } = useContext(PlanetsContext);

  return (
    <label htmlFor="select-comparison">
      <select
        data-testid="comparison-filter"
        id="select-comparison"
        name="comparison"
        value={ comparison }
        onChange={ ({ target }) => setComparison(target.value) }
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
    </label>
  );
}

export default Comparison;
