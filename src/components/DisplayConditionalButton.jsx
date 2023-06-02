import { useDispatch, useSelector } from 'react-redux';
import { toggleChecklistItemStatus } from '../redux/eclSlice';

const DisplayConditionalButton = ({ obj, parentId }) => {
  const { id, completed, text } = obj;
  const { data } = useSelector((state) => state.ecl);
  const dispatch = useDispatch();

  // Get the complete object that matches the parents id
  const parentObj = data.find((eachItem) => eachItem.id === parentId);

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

  const active = completed ? 'active' : '';

  return (
    <>
      <button key={id} className={active} onClick={() => handleToggle(id)}>
        {text}
      </button>
    </>
  );
};

export default DisplayConditionalButton;
