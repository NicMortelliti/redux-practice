import useGetIndexIds from '../hooks/useGetIndexIds';
import ItemDirector from '../helpers/ItemDirector';
import { useSelector } from 'react-redux';
import DisplaySubIndexes from './DisplaySubIndexes';

const DisplayIndexes = () => {
  const { selectedIndexId } = useSelector((state) => state.ecl);
  const indexIds = useGetIndexIds();
  const RenderButtons = () =>
    indexIds.map((id) => <ItemDirector key={id} id={id} />);

  return (
    <>
      <RenderButtons />
      {selectedIndexId && <DisplaySubIndexes />}
    </>
  );
};

export default DisplayIndexes;
