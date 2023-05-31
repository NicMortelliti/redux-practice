import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setChecklistData } from '../redux/eclSlice';

export const useFetchData = (url) => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => dispatch(setChecklistData(data)));
  }, [url]);
};
