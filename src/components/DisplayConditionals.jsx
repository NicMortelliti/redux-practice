import { useDispatch, useSelector } from 'react-redux';
import useGetChildren from '../hooks/useGetChildren';
import { toggleChecklistItemStatus } from '../redux/eclSlice';

const DisplayConditionals = ({ obj }) => {
  const dispatch = useDispatch();
  const conditionalChildren = useGetChildren(obj);
  const { data } = useSelector((state) => state.ecl);

  const getIdOfNonSelectedConditional = (selectedId) => {
    // We need to ensure only one radio button is selected.
    // So maybe we grab the id of the conditional item that is
    // not selected and make sure it's deselected (false)
    const notSelectedIds = obj.children_ids.filter(
      (eachChild) => eachChild !== selectedId
    );

    return notSelectedIds;
  };

  const handleToggle = (selectedId) => {
    dispatch(toggleChecklistItemStatus(selectedId));

    // Set other radio buttons to false
    const notSelectedIds = getIdOfNonSelectedConditional(selectedId);
    notSelectedIds.map((eachNotSelectedId) => {
      // Find only the id's of the other radio buttons that are set to true
      if (
        data.find((eachObj) => eachObj.id === eachNotSelectedId).completed ===
        true
      ) {
        dispatch(toggleChecklistItemStatus(eachNotSelectedId));
      }
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
