import useGetChecklistItems from '../hooks/useGetChecklistItems';

const DisplayChecklistItems = () => {
  const checklistItems = useGetChecklistItems();
  return checklistItems.map((eachChecklistItem, i) => {
    const { challenge, response } = eachChecklistItem;
    const active = 'active';

    return (
      <p key={i} className={active}>
        {challenge} {response}
      </p>
    );
  });
};

export default DisplayChecklistItems;
