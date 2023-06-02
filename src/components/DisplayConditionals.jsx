import { useDispatch, useSelector } from 'react-redux';
import useGetChildren from '../hooks/useGetChildrenIds';
import { toggleChecklistItemStatus } from '../redux/eclSlice';

const DisplayConditionals = ({ obj }) => {
  const dispatch = useDispatch();
  const conditionalChildren = useGetChildren(obj);
  const { data } = useSelector((state) => state.ecl);

  const getIdsOfNonSelectedConditional = (selectedId) =>
    obj.children_ids.filter((eachChild) => eachChild !== selectedId);

  const handleToggle = (selectedId) => {
    dispatch(toggleChecklistItemStatus(selectedId));

    // Set other radio buttons to false
    const notSelectedIds = getIdsOfNonSelectedConditional(selectedId);
    notSelectedIds.map((eachNotSelectedId) => {
      const objWithThisId = data.find(
        (eachObj) => eachObj.id === eachNotSelectedId
      );

      // Find only the id's of the other radio buttons that are set to true
      objWithThisId.completed &&
        dispatch(toggleChecklistItemStatus(eachNotSelectedId));
    });
  };

  return conditionalChildren.map((eachConditional) => {
    const { id, text, completed } = eachConditional;
    const active = completed ? 'active' : '';

    return (
      <button key={id} className={active} onClick={() => handleToggle(id)}>
        {text}
      </button>
    );
  });
};

export default DisplayConditionals;
