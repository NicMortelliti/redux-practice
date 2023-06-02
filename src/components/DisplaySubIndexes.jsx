import { useSelector } from 'react-redux';
import ItemDirector from '../helpers/ItemDirector';

const DisplaySubIndexes = () => {
  const { selectedIndexId, data } = useSelector((state) => state.ecl);

  // Get sub index id's for selected index
  const obj = data.find((eachItem) => eachItem.id === selectedIndexId);
  const { children_ids } = obj;

  const RenderButtons = () =>
    children_ids.map((id) => <ItemDirector key={id} id={id} />);

  return <RenderButtons />;
};

export default DisplaySubIndexes;
