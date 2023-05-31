import { useDispatch, useSelector } from 'react-redux';
import useGetChildren from '../hooks/useGetChildren';
import { toggleChecklistItemStatus } from '../redux/eclSlice';

const DisplayChecklistItems = () => {
  const dispatch = useDispatch();
  const { selectedSubIndexObj } = useSelector((state) => state.ecl);
  const checklistItems = useGetChildren(selectedSubIndexObj);

  return checklistItems.map((eachChecklistItem, i) => {
    const { text, id, completed } = eachChecklistItem;
    const active = completed ? 'active' : '';

    return (
      <p
        key={i}
        className={active}
        onClick={() => dispatch(toggleChecklistItemStatus(id))}>
        {text}
      </p>
    );
  });
};

export default DisplayChecklistItems;
