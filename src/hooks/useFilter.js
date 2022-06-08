import { useEffect, useState, useContext } from 'react';

function useFilter(filterText) {
  const { initialData, data, setData } = useContext(PlanetsContext);
  // console.log(data);
  const [dataFiltered, setdataFiltered] = useState([]);
  useEffect(() => {
    const newData = initialData
      .filter(({ name }) => name.toLowerCase().includes(filterText));
    // console.log('newData', newData);
    setdataFiltered(newData);
  }, [filterText]);
  return dataFiltered;
}

export default useFilter;
