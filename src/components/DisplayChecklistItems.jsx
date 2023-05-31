import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useGetChecklistItems from '../hooks/useGetChecklistItems';
import useGetChecklistItemStatus from '../hooks/useGetChecklistItemStatus';
import { toggleChecklistItemStatus } from '../redux/eclSlice';

const DisplayChecklistItems = () => {
  const dispatch = useDispatch();
  const checklistItems = useGetChecklistItems();

  return checklistItems.map((eachChecklistItem, i) => {
    const { challenge, response, ID } = eachChecklistItem;
    const active = useGetChecklistItemStatus(ID);

    useEffect(() => {
      const status = useGetChecklistItemStatus(ID);
    }, [ID]);

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
