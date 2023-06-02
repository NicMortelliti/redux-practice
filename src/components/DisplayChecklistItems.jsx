import useGetChildrenIds from '../hooks/useGetChildrenIds';
import ItemDirector from '../helpers/ItemDirector';
import { useSelector } from 'react-redux';

const DisplayChecklistItems = () => {
  const { selectedSubIndexObj } = useSelector((state) => state.ecl);
  const checklistItemIds = useGetChildrenIds(selectedSubIndexObj);

  return checklistItemIds.map((id) => {
    return <ItemDirector key={id} id={id} />;
  });
};

export default DisplayChecklistItems;
