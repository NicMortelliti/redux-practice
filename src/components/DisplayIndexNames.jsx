import { useDispatch, useSelector } from 'react-redux';
import { setSelectedIndexName } from '../redux/eclSlice';

const DisplayIndexNames = () => {
  const dispatch = useDispatch();
  const { data, selectedIndexName } = useSelector((state) => state.ecl);

  const RenderButtons = () =>
    data.map((eachIndex, i) => {
      const { indexName } = eachIndex;
      const active = selectedIndexName === indexName ? 'active' : '';
      return (
        <button
          key={i}
          className={active}
          onClick={() => dispatch(setSelectedIndexName(indexName))}>
          {indexName}
        </button>
      );
    });

  return <RenderButtons />;
};

export default DisplayIndexNames;
