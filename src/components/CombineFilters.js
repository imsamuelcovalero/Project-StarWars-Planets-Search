import React, { useState, useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
// import useCombineFilter from '../hooks/useCombineFilter';

function CombineFilters() {
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [number, setNumber] = useState(0);
  const { combineFilter, columns, setFilteredData, initialData,
    setData } = useContext(PlanetsContext);

  const HandleSubmit = (event) => {
    event.preventDefault();
    console.log('entrou em HandleSubmit');
    combineFilter(column, comparison, number);
    setColumn('population');
    setComparison('maior que');
    setNumber(0);
  };

  const HandleDeleteAll = (event) => {
    event.preventDefault();
    setFilteredData([]);
    setData(initialData);
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
          {
            columns.map((selectOption, index) => (
              <option key={ index }>{selectOption}</option>
            ))
          }
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
        Executar Filtragem
      </button>
      <button
        data-testid="button-remove-filters"
        type="submit"
        onClick={ HandleDeleteAll }
      >
        Remover Filtragens
      </button>
    </form>
  );
}

export default CombineFilters;
