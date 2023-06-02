import { useDispatch, useSelector } from 'react-redux';
import { setSelectedSubIndexId } from '../redux/eclSlice';
import ItemDirector from '../helpers/ItemDirector';

const DisplaySubIndexButton = ({ obj }) => {
  const dispatch = useDispatch();
  const { selectedSubIndexId } = useSelector((state) => state.ecl);
  const { id, text, children_ids } = obj;
  const active = selectedSubIndexId === id ? 'active' : '';

  const RenderChildren = () =>
    children_ids.map((id) => <ItemDirector key={id} id={id} />);

  return (
    <>
      <p className={active} onClick={() => dispatch(setSelectedSubIndexId(id))}>
        {text}
      </p>
      {active && <RenderChildren />}
    </>
  );
};

export default DisplaySubIndexButton;
