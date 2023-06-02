import { useDispatch, useSelector } from 'react-redux';
import { setSelectedIndexObj } from '../redux/eclSlice';

const DisplayIndexButton = ({ obj }) => {
  const dispatch = useDispatch();
  const { selectedIndexObj } = useSelector((state) => state.ecl);
  const { id, text } = obj;
  const active = selectedIndexObj.text === text ? 'active' : '';

  return (
    <button
      className={active}
      onClick={() => dispatch(setSelectedIndexObj(id))}>
      {text}
    </button>
  );
};

export default DisplayIndexButton;
