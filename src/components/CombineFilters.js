import React, { useState, useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import useCombineFilter from '../hooks/useCombineFilter';

function CombineFilters() {
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [numbers, setNumbers] = useState(0);
  const { data, setData } = useContext(PlanetsContext);

  const HandleSubmit = (event) => {
    event.preventDefault();
    const filtredResult = useCombineFilter(column, comparison, numbers, data);
    console.log('filtredResult', filtredResult);
    // setData(filtredResult);
  };

  return (
    <form>
      <label htmlFor="select-column">
        Coluna:
        <select
          data-testid="column-filter"
          id="select-column"
          name="column"
          value={ column }
          onChange={ ({ target }) => setColumn(target.value) }
        >
          <option>population</option>
          <option>orbital_period</option>
          <option>diameter</option>
          <option>rotation_period</option>
          <option>surface_water</option>
        </select>
      </label>
      <label htmlFor="select-comparison">
        Comparação:
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
      <label htmlFor="input-numbers">
        Valor do Filtro:
        <input
          data-testid="value-filter"
          id="input-numbers"
          name="numbers"
          value={ numbers }
          type="number"
          onChange={ ({ target }) => setNumbers(target.value) }
        />
      </label>
      <button
        data-testid="button-filter"
        type="submit"
        onClick={ HandleSubmit }
      >
        Executar filtragem
      </button>
    </form>
  );
}

export default CombineFilters;
