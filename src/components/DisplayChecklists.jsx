import { useDispatch, useSelector } from 'react-redux';
import { setSelectedChecklistID } from '../redux/eclSlice';

const DisplayChecklists = () => {
  const dispatch = useDispatch();
  const { data, selectedIndexName } = useSelector((state) => state.ecl);

  // Find the index that matches the selectedIndex name
  const checklistGroup = data.find(
    (eachIndex) => eachIndex.indexName === selectedIndexName
  )?.checklists;

  // Display each checklist title
  return checklistGroup.map((eachChecklist, i) => {
    const { checklistName, ID } = eachChecklist;
    return (
      <h5 key={i} onClick={() => dispatch(setSelectedChecklistID(ID))}>
        {checklistName}
      </h5>
    );
  });
};

export default DisplayChecklists;
