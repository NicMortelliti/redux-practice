import { useDispatch, useSelector } from 'react-redux';
import { setSelectedChecklistID } from '../redux/eclSlice';
import DisplayChecklistItems from './DisplayChecklistItems';
import useGetChecklistGroup from '../hooks/useGetChecklistGroup';

const DisplayChecklists = () => {
  const dispatch = useDispatch();
  const { selectedChecklistID } = useSelector((state) => state.ecl);

  // Find the index that matches the selectedIndex name
  const checklistGroup = useGetChecklistGroup();

  // Display each checklist title
  return checklistGroup.map((eachChecklist, i) => {
    const { checklistName, ID } = eachChecklist;
    return (
      <>
        <h5 key={i} onClick={() => dispatch(setSelectedChecklistID(ID))}>
          {checklistName}
        </h5>
        {ID === selectedChecklistID ? <DisplayChecklistItems /> : null}
      </>
    );
  });
};

export default DisplayChecklists;
