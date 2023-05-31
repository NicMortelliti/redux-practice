import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedSubIndexObj } from '../redux/eclSlice';
import DisplayChecklistItems from './DisplayChecklistItems';
import useGetChildren from '../hooks/useGetChildren';

const DisplaySubIndexes = () => {
  const dispatch = useDispatch();
  const { selectedIndexObj, selectedSubIndexObj } = useSelector(
    (state) => state.ecl
  );

  // Find the index that matches the selectedIndex name
  const subIndexes = useGetChildren(selectedIndexObj);

  // Display each checklist title
  return subIndexes.map((eachSubIndex, i) => {
    const { text, id } = eachSubIndex;
    return (
      <React.Fragment key={i}>
        <h5 onClick={() => dispatch(setSelectedSubIndexObj(eachSubIndex))}>
          {text}
        </h5>
        {id === selectedSubIndexObj.id ? <DisplayChecklistItems /> : null}
      </React.Fragment>
    );
  });
};

export default DisplaySubIndexes;
