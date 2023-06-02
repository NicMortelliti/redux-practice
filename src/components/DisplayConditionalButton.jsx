import { useDispatch, useSelector } from 'react-redux';
import ItemDirector from '../helpers/ItemDirector';
import { toggleChecklistItemStatus } from '../redux/eclSlice';

const DisplayConditionalButton = ({ obj, parentId }) => {
  const { id, children_ids, completed, text } = obj;
  const { data } = useSelector((state) => state.ecl);

  // Get the complete object that matches the parents id
  const parentObj = data.find((eachItem) => eachItem.id === parentId);

  const dispatch = useDispatch();

  const handleToggle = (selectedId) => {
    dispatch(toggleChecklistItemStatus(selectedId));

    // Set other radio buttons to false
    const notSelectedIds = parentObj.children_ids.filter(
      (id) => id !== selectedId
    );
    notSelectedIds.map((id) => {
      const objWithThisId = data.find((eachObj) => eachObj.id === id);

      // Find only the id's of the other radio buttons that are set to true
      objWithThisId.completed && dispatch(toggleChecklistItemStatus(id));
    });
  };

  // Render child items if this item is active
  const RenderChildren = () =>
    children_ids.map((id) => <ItemDirector key={id} id={id} />);

  const active = completed ? 'active' : '';

  return (
    <>
      <button key={id} className={active} onClick={() => handleToggle(id)}>
        {text}
      </button>
      {active && <RenderChildren />}
    </>
  );
};

export default DisplayConditionalButton;
