import { useSelector } from 'react-redux';
import useGetChildren from '../hooks/useGetChildrenIds';
import ItemDirector from '../helpers/ItemDirector';

const DisplaySubIndexes = () => {
  const { selectedIndexId } = useSelector((state) => state.ecl);
  const subIndexIds = useGetChildren(selectedIndexId);
  console.log(`SubIndexes: ${subIndexIds}`)
  const RenderButtons = () =>
    subIndexIds.map((id) => <ItemDirector key={id} id={id} />);

  return <RenderButtons />;
};

export default DisplaySubIndexes;
