import Checklist from './Checklist';
import Header from './Header';
import { useFetchData } from '../hooks/fetchers';

const url = './ecl_data.json';

const App = () => {
  useFetchData(url);

  return (
    <>
      <Header />
      <Checklist />
    </>
  );
};

export default App;
