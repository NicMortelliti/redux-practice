import Checklist from './Checklist';
import { useFetchData } from '../hooks/useFetchData';

const url = './ecl_data2.json';

const App = () => {
  useFetchData(url);

  return (
    <>
      <Checklist />
    </>
  );
};

export default App;
