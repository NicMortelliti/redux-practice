import DisplayIndexNames from './DisplayIndexNames';
import DisplayChecklists from './DisplayChecklists';
import { useSelector } from 'react-redux';

const Checklist = () => {
  const { selectedIndexName } = useSelector((state) => state.ecl);

  return (
    <>
      <DisplayIndexNames />
      {selectedIndexName && <DisplayChecklists />}
    </>
  );
};

export default Checklist;
