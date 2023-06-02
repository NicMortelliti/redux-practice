import { useDispatch } from 'react-redux';
import { toggleChecklistItemStatus } from '../redux/eclSlice';
import ItemDirector from '../helpers/ItemDirector';

const DisplayChecklistItemButton = ({ obj }) => {
  const dispatch = useDispatch();

  const { id, text, completed, children_ids } = obj;
  const active = completed ? 'active' : '';

  // Pass each of the child ids to the director
  const RenderChildren = () =>
    children_ids.map((id) => <ItemDirector key={id} id={id} />);

  return (
    <>
      <p
        className={active}
        onClick={() => dispatch(toggleChecklistItemStatus(id))}>
        {text}
      </p>
      <RenderChildren />
    </>
  );
};

export default DisplayChecklistItemButton;
