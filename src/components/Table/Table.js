import React, { useContext } from 'react';
import PlanetsContext from '../../context/PlanetsContext';
import CombineFilters from '../CombineFilters/CombineFilters';
import logo from '../../SW Logo Black.png';
import { Section, DivGlobal, SectionTable, FilterData, CombineFIltersDiv } from './Style';
import TableEl from './TableEl';

function Table() {
  const { filterText, setFilterText, hasFilter, setHasFilter,
    filteredData, setFilteredData, setColumns, columns,
    initialData, setData } = useContext(PlanetsContext);

  const HandleSubmit = (filtro) => {
    const filtersUpated = filteredData.filter((elements) => elements !== filtro);
    setFilteredData(filtersUpated);
    setColumns([...columns, filtro.column]);
    if (filtersUpated.length === 0) {
      setData(initialData);
      setHasFilter(false);
    }
  };

  return (
    <Section>
      <DivGlobal>
        <div>
          <img src={ logo } alt="Logo" />
        </div>
        <div>
          <label htmlFor="input-filter-term">
            <input
              data-testid="name-filter"
              id="input-filter-term"
              value={ filterText }
              type="text"
              onChange={ ({ target }) => setFilterText(target.value.toLowerCase()) }
            />
          </label>
        </div>
        <CombineFIltersDiv>
          <CombineFilters />
        </CombineFIltersDiv>
        <FilterData hasFilter={ hasFilter }>
          {
            hasFilter
          && (
            <ul>
              {
                filteredData.map((filtro, index) => (
                  <li id="filterElement" data-testid="filter" key={ index }>
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
          )
          }
        </FilterData>
        <SectionTable>
          <TableEl />
        </SectionTable>
      </DivGlobal>
    </Section>
  );
}

export default Table;
