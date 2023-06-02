import useGetIndexIds from '../hooks/useGetIndexIds';
import ItemDirector from '../helpers/ItemDirector';

const DisplayIndexes = () => {
  const indexIds = useGetIndexIds();
  const RenderButtons = () =>
    indexIds.map((id) => <ItemDirector key={id} id={id} />);

  return <RenderButtons />;
};

export default DisplayIndexes;
