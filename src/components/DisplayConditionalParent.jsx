import ItemDirector from '../helpers/ItemDirector';

const DisplayConditionalParent = ({ obj }) => {
  const { id: parentId, text, children_ids } = obj;

  const RenderChildren = () =>
    children_ids.map((id) => (
      <ItemDirector key={id} id={id} parentId={parentId} />
    ));

  return (
    <>
      <p>{text}</p>
      <RenderChildren />
    </>
  );
};

export default DisplayConditionalParent;
