import { useEffect, useState } from 'react';

function useCombineFilter(column, comparison, numbers, data) {
  console.log(column, comparison, numbers, data);
  const [dataFiltered, setdataFiltered] = useState([]);
  useEffect(() => {
    const newData = data.filter(({ name }) => name.includes(filterText));
    console.log('newData', newData);
    setdataFiltered(newData);
  }, [column, comparison, numbers, data]);
  return dataFiltered;
}

export default useCombineFilter;
