import Checklist from './Checklist';
import { useFetchData } from '../hooks/fetchers';

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
