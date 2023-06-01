import { useDispatch, useSelector } from 'react-redux';
import useGetChildren from '../hooks/useGetChildren';
import { toggleChecklistItemStatus } from '../redux/eclSlice';
import DisplayConditionals from '../components/DisplayConditionals';
import React from 'react';

const DisplayChecklistItems = () => {
  const dispatch = useDispatch();
  const { selectedSubIndexObj } = useSelector((state) => state.ecl);
  const checklistItems = useGetChildren(selectedSubIndexObj);

  return checklistItems.map((eachChecklistItem, i) => {
    const { id, text, type, completed } = eachChecklistItem;
    const active = completed ? 'active' : '';

    return (
      <React.Fragment key={i}>
        <p
          className={active}
          onClick={() => dispatch(toggleChecklistItemStatus(id))}>
          {text}
        </p>
        {(type === 'conditional_parent' || 'msli_parent') && (
          <DisplayConditionals obj={eachChecklistItem} />
        )}
      </React.Fragment>
    );
  });
};

export default DisplayChecklistItems;
