import { useEffect, useState } from 'react';

function useFilter(filterText, data) {
  // console.log(data);
  const [dataFiltered, setdataFiltered] = useState([]);
  useEffect(() => {
    const newData = data.filter(({ name }) => name.includes(filterText));
    // console.log('newData', newData);
    setdataFiltered(newData);
  }, [filterText, data]);
  return dataFiltered;
}

export default useFilter;
