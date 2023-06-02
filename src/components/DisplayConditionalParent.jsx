import ItemDirector from '../helpers/ItemDirector';
import { useSelector } from 'react-redux';

const DisplayConditionalParent = ({ obj }) => {
  const { id: parentId, text, children_ids } = obj;
  const { data } = useSelector((state) => state.ecl);

  const RenderChildren = () =>
    children_ids.map((id) => (
      <ItemDirector key={id} id={id} parentId={parentId} />
    ));

  const RenderChildrenOfSelectedConditional = () =>
    children_ids.map((id) => {
      const obj = data.find((eachItem) => eachItem.id === id);
      const { completed, children_ids } = obj;

      return completed
        ? children_ids.map((id) => <ItemDirector key={id} id={id} />)
        : null;
    });

  return (
    <>
      <p>{text}</p>
      <RenderChildren />
      <RenderChildrenOfSelectedConditional />
    </>
  );
};

export default DisplayConditionalParent;
