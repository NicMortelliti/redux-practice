import { useDispatch } from 'react-redux';
import { toggleChecklistItemStatus } from '../redux/eclSlice';
import itemDirector from '../helpers/ItemDirector';
import useGetChildren from '../hooks/useGetChildrenIds';

const DisplayChecklistItem = ({ obj }) => {
  const dispatch = useDispatch();

  const { id, text, completed } = obj;
  const active = completed ? 'active' : '';

  // Get ids of the children for this object
  const childrenItems = useGetChildren(obj);

  // Pass each of the child ids to the director
  const renderChildren = () =>
    childrenItems.map((eachChildItem) => itemDirector(eachChildItem));

  return (
    <>
      <p
        className={active}
        onClick={() => dispatch(toggleChecklistItemStatus(id))}>
        {text}
      </p>
      {renderChildren}
    </>
  );
};

export default DisplayChecklistItem;
