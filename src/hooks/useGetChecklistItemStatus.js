import useGetChecklistItems from './useGetChecklistItems';

const useGetChecklistItemStatus = ({ itemID }) => {
  const checklistItems = useGetChecklistItems();

  return checklistItems.find(
    (eachChecklistItem) => eachChecklistItem.ID === itemID
  )?.completed;
};

export default useGetChecklistItemStatus;
