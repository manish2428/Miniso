import React from 'react';
import { useState } from 'react';
import Navbar from '../Navbar/Navbar';

const Post = () => {
  const [post, setPost] = useState('');

  const postHandler = (e) => {
    setPost(e.target.value);
  };
  const btnclicked = (e) => {
    console.log('button clicked');
  };

  return (
    <>
      <Navbar />
      <div className='container mt-5 pt-3'>
        <div>
          <h1 className='text-center mt-5'>Posts</h1>

          <div>
            <div className='form-outline container'>
              <label className='form-label' for='textAreaExample'>
                Create a post
              </label>
              <textarea
                className='form-control'
                id='textAreaExample'
                style={{ border: '1px solid black' }}
                rows='4'
                onChange={postHandler}
                name='textarea'
              ></textarea>
            </div>
          </div>

          <div className='ml-3'>
            <button
              type='button'
              className='btn btn-success mt-4 p-2'
              name='btn'
              onClick={btnclicked}
            >
              Submit
            </button>
          </div>

          {/* <div classNameName='comment-card'>
          <div className='card text-right border border-primary shadow-0 text-white'>
            <div className='card-body'>
              <i className='fas fa-user-circle'></i>

              <h5 className='card-title'>Card title</h5>
              <p className='card-text'>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div> */}
        </div>
      </div>
    </>
  );
};

export default Post;
