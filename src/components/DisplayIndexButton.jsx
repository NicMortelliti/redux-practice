import { useDispatch, useSelector } from 'react-redux';
import { setSelectedIndexId } from '../redux/eclSlice';

const DisplayIndexButton = ({ obj }) => {
  const dispatch = useDispatch();
  const { selectedIndexId } = useSelector((state) => state.ecl);
  const { id, text } = obj;
  const active = selectedIndexId === id ? 'active' : '';

  return (
    <>
      <button
        className={active}
        onClick={() => dispatch(setSelectedIndexId(id))}>
        {text}
      </button>
    </>
  );
};

export default DisplayIndexButton;
