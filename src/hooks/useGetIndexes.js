import { useSelector } from 'react-redux';

const useGetIndexes = () => {
  const { data } = useSelector((state) => state.ecl);
  const indexes = data.filter((obj) => obj.type === 'index');
  return indexes;
};

export default useGetIndexes;
