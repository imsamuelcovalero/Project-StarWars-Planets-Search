import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
// import useFilter from '../hooks/useFilter';
import CombineFilters from './CombineFilters';

function Table() {
  const { data, filterText, setFilterText, hasFilter,
    filteredData, setFilteredData, setColumns, columns,
    initialData, setData } = useContext(PlanetsContext);

  const HandleSubmit = (filtro) => {
    console.log('filtro', filtro);
    const filtersUpated = filteredData.filter((elements) => elements !== filtro);
    console.log('filtersUpated', filtersUpated);
    setFilteredData(filtersUpated);
    // newFilteredCombine(filtersUpated);
    setColumns([...columns, filtro.column]);
    console.log('aqui2');
    if (filtersUpated.length === 0) {
      setData(initialData);
    }
  };

  return (
    <section>
      <CombineFilters />
      <label htmlFor="input-filter-term">
        Nome do Planeta:
        <input
          data-testid="name-filter"
          id="input-filter-term"
          value={ filterText }
          type="text"
          onChange={ ({ target }) => setFilterText(target.value.toLowerCase()) }
        />
      </label>
      {
        hasFilter
          && (
            <div>
              <ul>
                {
                  filteredData.map((filtro, index) => (
                    <li data-testid="filter" key={ index }>
                      {`${filtro.column}
                    ${filtro.comparison}
                    ${filtro.number}`}
                      <button
                        type="button"
                        onClick={ () => HandleSubmit(filtro) }
                      >
                        X
                      </button>
                    </li>
                  ))
                }
              </ul>
            </div>
          )
      }
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>Url</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((planet, index) => (
              <tr key={ index }>
                <td>{ planet.name }</td>
                <td>{ planet.rotation_period }</td>
                <td>{ planet.orbital_period }</td>
                <td>{ planet.diameter }</td>
                <td>{ planet.climate }</td>
                <td>{ planet.gravity }</td>
                <td>{ planet.terrain }</td>
                <td>{ planet.surface_water }</td>
                <td>{ planet.population }</td>
                <td>{ planet.films }</td>
                <td>{ planet.created }</td>
                <td>{ planet.edited }</td>
                <td>{ planet.edited }</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </section>
  );
}

export default Table;
