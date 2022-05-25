import axios from 'axios';
import { useState, useEffect } from 'react';
function Display() {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    axios.get('').then((res) => {
      setApiData(res.data);
    });
  }, []);

  return <div></div>;
}

export default Display;
