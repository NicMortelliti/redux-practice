import { useSelector } from 'react-redux';

const useGetChildren = (selectedObj) => {
  const { data } = useSelector((state) => state.ecl);
  const children_ids = selectedObj.children_ids;
  const children = data.filter((obj) => children_ids.includes(obj.id));

  return children;
};

export default useGetChildren;
