import React, { useState, useEffect } from 'react';
import './Homepage.css';
import Navbar from '../Navbar/Navbar';
import Slide from './Slide';
import axios from 'axios';

const Homepage = () => {
  const [news, setNews] = useState([]);
  const getNewsData = () => {
    axios
      .get(
        'https://newsapi.org/v2/top-headlines?language=en&category=technology&apiKey=2a16448d9dd04d8eb73d16ca946489e5'
      )
      .then((res) => {
        // console.log(res);
        setNews((data) => [...data, ...res.data.articles]);
      });
  };

  useEffect(() => {
    getNewsData();
  }, []);
  return (
    <>
      <Navbar />
      <div className='hmpg'>
        <Slide data={news} />
      </div>
    </>
  );
};

export default Homepage;
