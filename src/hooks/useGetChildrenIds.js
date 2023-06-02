import getObjectById from '../helpers/getObjectById';

const useGetChildrenIds = (id) => {
  const obj = getObjectById(id);
  const { children_ids } = obj;

  return children_ids;
};

export default useGetChildrenIds;
