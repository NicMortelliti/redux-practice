import { useDispatch } from 'react-redux';
import useGetChildren from '../hooks/useGetChildren';
import { toggleChecklistItemStatus } from '../redux/eclSlice';

const DisplayConditionals = ({ obj }) => {
  const dispatch = useDispatch();
  const conditionalChildren = useGetChildren(obj);

  const getIdOfNonSelectedConditional = (selectedId) => {
    // We need to ensure only one radio button is selected.
    // So maybe we grab the id of the conditional item that is
    // not selected and make sure it's deselected (false)
  };

  const handleToggle = (selectedId) => {
    dispatch(toggleChecklistItemStatus(selectedId));
  };

  return conditionalChildren.map((eachConditional) => {
    const { id, text, completed } = eachConditional;
    const active = completed ? 'active' : '';

    return (
      <button
        key={id}
        className={active}
        onClick={() => dispatch(toggleChecklistItemStatus(id))}>
        {text}
      </button>
    );
  });
};

export default DisplayConditionals;
