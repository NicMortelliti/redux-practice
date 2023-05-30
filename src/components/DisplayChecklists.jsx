import { useDispatch } from 'react-redux';
import { setSelectedChecklistID } from '../redux/eclSlice';
import useGetChecklistGroup from '../hooks/useGetChecklistGroup';

const DisplayChecklists = () => {
  const dispatch = useDispatch();

  // Find the index that matches the selectedIndex name
  const checklistGroup = useGetChecklistGroup();

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
