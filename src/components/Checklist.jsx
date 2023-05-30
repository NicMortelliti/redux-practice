import { useSelector } from 'react-redux';
import DisplayIndexName from './DisplayIndexName';
import DisplayChecklists from './DisplayChecklists';

const Checklist = () => {
  const { data } = useSelector((state) => state.ecl);

  const RenderChecklist = () =>
    data.map((eachIndexGroup, i) => {
      const { indexName, checklists } = eachIndexGroup;
      return (
        <div key={i}>
          <DisplayIndexName title={indexName} />
          <DisplayChecklists checklists={checklists} />
        </div>
      );
    });

  return (
    <>
      <RenderChecklist />
    </>
  );
};

export default Checklist;
