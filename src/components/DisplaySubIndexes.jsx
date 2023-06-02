import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedSubIndexObj } from '../redux/eclSlice';
import DisplayChecklistItems from './DisplayChecklistItems';
import useGetChildren from '../hooks/useGetChildrenIds';
import useGetObjectById from '../helpers/getObjectById';
import itemDirector from '../helpers/ItemDirector';

const DisplaySubIndexes = () => {
  const dispatch = useDispatch();
  const { selectedIndexObj, selectedSubIndexObj } = useSelector(
    (state) => state.ecl
  );

  const subIndexIds = useGetChildren(selectedIndexObj);

  // Pass each of the child ids to the director
  return subIndexIds.map((eachChildItem) => itemDirector(eachChildItem));
};

export default DisplaySubIndexes;
