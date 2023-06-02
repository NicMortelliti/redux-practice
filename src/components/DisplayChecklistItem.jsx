import { useDispatch } from 'react-redux';
import { toggleChecklistItemStatus } from '../redux/eclSlice';
import itemDirector from '../helpers/ItemDirector';

const DisplayChecklistItem = ({ obj }) => {
  const dispatch = useDispatch();

  const { id, text, completed, children_ids } = obj;
  const active = completed ? 'active' : '';

  // Pass each of the child ids to the director
  const renderChildren = () => children_ids.map((id) => itemDirector(id));

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
