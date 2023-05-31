import { useDispatch, useSelector } from 'react-redux';
import { setSelectedIndexObj } from '../redux/eclSlice';
import useGetIndexes from '../hooks/useGetIndexes';

const DisplayIndexes = () => {
  const dispatch = useDispatch();
  const { selectedIndexObj } = useSelector((state) => state.ecl);

  const RenderButtons = () =>
    useGetIndexes().map((eachIndex, i) => {
      const { text } = eachIndex;
      const active = selectedIndexObj.text === text ? 'active' : '';
      return (
        <button
          key={i}
          className={active}
          onClick={() => dispatch(setSelectedIndexObj(eachIndex))}>
          {text}
        </button>
      );
    });

  return <RenderButtons />;
};

export default DisplayIndexes;
