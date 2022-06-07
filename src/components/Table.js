import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Xablau() {
  const { data } = useContext(PlanetsContext);
  const { name, rotation_period: rotationPeriod, orbital_period: orbitalPeriod, diameter,
    climate, gravity, terrain, surface_water: surfaceWater, population, films, created,
    edited, url } = data;

  return (
    <table>
      <thead>
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
      </thead>
      {/* <tbody>
      </tbody> */}
    </table>
  );
}

export default Xablau;
