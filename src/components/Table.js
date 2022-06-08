import React, { useState, useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import useFilter from '../hooks/useFilter';
import CombineFilters from './CombineFilters';

function Table() {
  const [filterText, setfilterText] = useState('');
  const { data, setData } = useContext(PlanetsContext);

  const planets = useFilter(filterText, data);
  // console.log(xablau);
  // setData(xablau);

  return (
    <section>
      <CombineFilters />
      <label htmlFor="input-filter-term">
        Filtro:
        <input
          data-testid="name-filter"
          id="input-filter-term"
          value={ filterText }
          type="text"
          onChange={ ({ target }) => setfilterText(target.value.toLowerCase()) }
        />
      </label>
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
            planets.map((planet, index) => (
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
