import { useSelector } from 'react-redux';

const getObjectById = (id) => {
  const { data } = useSelector((state) => state.ecl);
  return data.find((eachItem) => eachItem.id === id);
};

export default getObjectById;
