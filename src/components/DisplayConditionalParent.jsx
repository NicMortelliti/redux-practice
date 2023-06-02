import ItemDirector from '../helpers/ItemDirector';
import { useSelector } from 'react-redux';

const DisplayConditionalParent = ({ obj }) => {
  const { id: parentId, text, children_ids, type } = obj;
  const { data } = useSelector((state) => state.ecl);

  const RenderChildren = () =>
    children_ids.map((id) => {
      if (type === 'conditional_parent') {
        return <ItemDirector key={id} id={id} parentId={parentId} />;
      } else if (type === 'msli_parent') {
        return (
          <div key={id}>
            <ItemDirector id={id} parentId={parentId} />
          </div>
        );
      }
    });

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
