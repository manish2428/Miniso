import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { Component } from 'react';
import Slider from 'react-slick';
import './Slide.css';
import { Link } from 'react-router-dom';

const Slide = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 300,
    cssEase: 'linear',
  };

  return (
    <div className='slider'>
      <h2 className='text-center text-dark pb-4'>
        <i className='fas fa-fire text-danger'></i>
        &nbsp;<u>Tech news</u> <i className='fas fa-fire text-danger'></i>
      </h2>
      <Slider {...settings}>
        {data.length === 0 && <h1>No data to display</h1>}
        {data.length > 0 &&
          data.map((i) => {
            return (
              <div
                key={i.url}
                className='card text-center border border-light shadow-0 text-white bg-dark'
              >
                <div
                  className='bg-image hover-overlay ripple'
                  data-mdb-ripple-color='light'
                >
                  <center>
                    <img src={i.urlToImage} className='img-fluid imgi' />
                  </center>
                  <Link to={i.url} target='_blank'>
                    <div className='mask ms'></div>
                  </Link>
                </div>
                <div className='card-header'>Featured</div>
                <div className='card-body'>
                  <h5 className='card-title'>{i.title}</h5>
                  <p className='card-text'>{i.description}</p>
                </div>
                <div className='card-footer'>
                  <button
                    type='button'
                    className='btn btn-primary'
                    onClick={(e) => window.open(i.url, '_blank')}
                  >
                    Read more --{'>'}
                  </button>
                </div>
              </div>
            );
          })}
      </Slider>
    </div>
  );
};

export default Slide;
