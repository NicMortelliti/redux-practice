const DisplayChecklists = ({ checklists }) =>
  checklists.map((eachChecklist, i) => {
    const { checklistName } = eachChecklist;
    return <h5 key={i}>{checklistName}</h5>;
  });

export default DisplayChecklists;
