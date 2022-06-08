import { useEffect, useState } from 'react';

function useCombineFilter(column, comparison, numbers, data) {
  console.log(column, comparison, numbers, data);
  const [dataFiltered, setdataFiltered] = useState([]);
  useEffect(() => {
    console.log('entrou');
    // const xablau = data.map((element) => {
    //   element.column
    // }
    const xablau = data.filter((element) => element.column === column);
    console.log('xablau', xablau);
    // const newData = data.filter(({ name }) => name.includes(filterText));
    // console.log('newData', newData);
    setdataFiltered(xablau);
  }, [column, comparison, numbers, data]);
  return dataFiltered;
}

export default useCombineFilter;
