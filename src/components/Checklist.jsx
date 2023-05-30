import DisplayIndexNames from './DisplayIndexNames';
import DisplayChecklists from './DisplayChecklists';
import DisplayChecklistItems from './DisplayChecklistItems';
import { useSelector } from 'react-redux';

const Checklist = () => {
  const { selectedIndexName, selectedChecklistID } = useSelector(
    (state) => state.ecl
  );

  return (
    <>
      <DisplayIndexNames />
      {selectedIndexName && <DisplayChecklists />}
      {selectedChecklistID && <DisplayChecklistItems />}
    </>
  );
};

export default Checklist;
