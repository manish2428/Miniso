import React, { useState } from 'react';
// import DatePicker from 'react-datepicker'

const Experience = () => {
  //experience
  const [title, setTitle] = useState('');
  const [cname, setCname] = useState('');
  const [location, setLocation] = useState('');
  const [doj, setDoj] = useState('');
  const [to, setTo] = useState('');
  const [current, setCurrent] = useState('false');
  const [description, setDescription] = useState('');

  const titleValidator = (e) => {
    setTitle(e.target.value);
  };

  const locationValidator = (e) => {
    setLocation(e.target.value);
  };

  const nameValidator = (e) => {
    setCname(e.target.value);
  };

  const datefromValidator = (e) => {
    setDoj(e.target.value.toString());
  };

  const datetoValidator = (e) => {
    setTo(e.target.value.toString());
  };

  const datecurrentValidator = (e) => {
    setCurrent(!current);
  };

  const descriptionValidator = (e) => {
    setDescription(e.target.value);
  };

  return (
    <div>
      <h1>Experience</h1>
      <form>
        <div className='form-outline'>
          <div>
            <lable>Title</lable>
          </div>
          <input
            type='text'
            id='typeText'
            className='form-control'
            required
            onChange={titleValidator}
          />
          <label className='form-label' for='typeText'>
            Job title
          </label>
        </div>

        <div className='form-outline'>
          <div>
            <lable>Company Name</lable>
          </div>
          <input
            type='text'
            id='typeText'
            className='form-control'
            required
            onChange={nameValidator}
          />
          <label className='form-label' for='typeText'>
            Company Name
          </label>
        </div>

        <div className='form-outline'>
          <div>
            <lable>Location</lable>
          </div>
          <input
            type='text'
            id='typeText'
            className='form-control'
            onChange={locationValidator}
          />
          <label className='form-label' for='typeText'>
            Location
          </label>
        </div>

        <div className='form-outline'>
          <div>
            <lable>Date of Joining</lable>
          </div>
          {/* <DatePicker selected={startDate} onChange={datefromValidator} /> */}
        </div>

        <div className='form-outline'>
          <div>
            <lable>To</lable>
          </div>
          {/* <DatePicker selected={startDate} onChange={datetoValidator} /> */}
        </div>

        <div className='form-outline'>
          <div>
            <lable>Current</lable>
          </div>
          <input
            type='checkbox'
            aria-label='radio 1'
            onChange={datecurrentValidator}
          />
        </div>

        <div className='form-outline'>
          <div>
            <lable>Description</lable>
          </div>
          <textarea
            className='form-control'
            id='textAreaExample'
            rows='4'
            onChange={descriptionValidator}
          ></textarea>
          <label className='form-label' for='textAreaExample'>
            Description
          </label>
        </div>
      </form>
    </div>
  );
};

export default Experience;
