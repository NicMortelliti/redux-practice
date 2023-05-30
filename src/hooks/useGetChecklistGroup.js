import { useSelector } from 'react-redux';

const useGetChecklistGroup = () => {
  const { data, selectedIndexName } = useSelector((state) => state.ecl);
  return data.find((eachIndex) => eachIndex.indexName === selectedIndexName)
    ?.checklists;
};

export default useGetChecklistGroup;
