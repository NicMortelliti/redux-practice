import { useDispatch } from 'react-redux';
import useGetChecklistItems from '../hooks/useGetChecklistItems';
import { toggleChecklistItemStatus } from '../redux/eclSlice';

const DisplayChecklistItems = () => {
  const dispatch = useDispatch();
  const checklistItems = useGetChecklistItems();

  return checklistItems.map((eachChecklistItem, i) => {
    const { challenge, response, ID, completed } = eachChecklistItem;
    const active = completed ? 'active' : '';

    return (
      <p
        key={i}
        className={active}
        onClick={() => dispatch(toggleChecklistItemStatus(ID))}>
        {challenge} {response}
      </p>
    );
  });
};

export default DisplayChecklistItems;
