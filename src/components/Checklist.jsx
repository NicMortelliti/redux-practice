import React, { useEffect, useState } from 'react';

const Checklist = () => {
  const [data, setData] = useState({});
  const url = './ecl_data.json';

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const stringifiedData = JSON.stringify(data, undefined, 2);

  return <>{stringifiedData}</>;
};

export default Checklist;
