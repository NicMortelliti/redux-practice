import { useSelector } from 'react-redux';

const useGetIndexIds = () => {
  const { data } = useSelector((state) => state.ecl);
  const indexes = data.filter((obj) => obj.type === 'index');
  const indexIds = indexes.map((eachIndex) => eachIndex.id);
  return indexIds;
};

export default useGetIndexIds;
