import useGetChecklistGroup from './useGetChecklistGroup';
import { useSelector } from 'react-redux';

const useGetChecklistItems = () => {
  const checklistGroup = useGetChecklistGroup();

  const { selectedChecklistID } = useSelector((state) => state.ecl);
  return checklistGroup.find(
    (eachChecklist) => eachChecklist.ID === selectedChecklistID
  )?.items;
};

export default useGetChecklistItems;
