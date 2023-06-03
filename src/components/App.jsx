import Checklist from './Checklist';
import { useFetchData } from '../hooks/useFetchData';

const url = './ecl_data.json';

const App = () => {
  useFetchData(url);

  return (
    <>
      <Checklist />
    </>
  );
};

export default App;
