import DisplayIndexes from './DisplayIndexes';
import DisplaySubIndexes from './DisplaySubIndexes';
import { useSelector } from 'react-redux';

const Checklist = () => {
  const { selectedIndexObj } = useSelector((state) => state.ecl);

  return (
    <>
      <DisplayIndexes />
      {selectedIndexObj && <DisplaySubIndexes />}
    </>
  );
};

export default Checklist;
