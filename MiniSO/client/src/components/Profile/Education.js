import React from 'react';
import { useState } from 'react';
const Education = () => {
  //education
  const [schoolname, setSchoolname] = useState('');
  const [degree, setDegree] = useState('');
  const [interest, setInterest] = useState('');
  const [educationdoj, seteduDoj] = useState('');
  const [educationto, seteduTo] = useState('');
  const [educationcurrent, seteduCurrent] = useState('false');
  cosnt[(description, setDescription)] = useState('');

  const schoolnamevalidator = (e) => {
    setSchoolname(e.target.value);
  };

  const degreeValidator = (e) => {
    setDegree(e.target.value);
  };

  const interestValidator = (e) => {
    setInterest(e.target.value);
  };

  const dateValidatorFrom = (e) => {
    console.log(e.target.value.toString());
    seteduDoj(e.target.value.toString());
  };

  const dateValidatorTo = (e) => {
    seteduTo(e.target.value.toString());
  };

  const dateValidatorCurrent = () => {
    seteduCurrent((d) => !d);
  };

  const DescriptionValidator = (e) => {
    setDescription(e.target.value);
  };

  return (
    <div>
      <h1>education</h1>
      <form>
        <div className='form-outline'>
          <div>
            <lable>School Name</lable>
          </div>
          <input
            type='text'
            id='typeText'
            className='form-control'
            required
            onChange={schoolnamevalidator}
          />
          <label className='form-label' for='typeText'>
            Name of the school
          </label>
        </div>

        <div className='form-outline'>
          <div>
            <lable>Degree</lable>
          </div>
          <input
            type='text'
            id='typeText'
            className='form-control'
            required
            onChange={degreeValidator}
          />
          <label className='form-label' for='typeText'>
            Heighest Degree
          </label>
        </div>

        <div className='form-outline'>
          <div>
            <lable>Field of Interest</lable>
          </div>
          <textarea
            className='form-control'
            id='textAreaExample'
            rows='4'
            onChange={interestValidator}
          ></textarea>
          <label className='form-label' for='textAreaExample'>
            Interest
          </label>
        </div>

        <div className='form-outline'>
          <div>
            <lable>From</lable>
          </div>
          <DatePicker selected={startDate} onChange={dateValidatorFrom} />
        </div>

        <div className='form-outline'>
          <div>
            <lable>To</lable>
          </div>
          <DatePicker selected={startDate} onChange={dateValidatorTo} />
        </div>

        <div className='form-outline'>
          <div>
            <lable>Current</lable>
          </div>
          <Form.Check
            type='checkbox'
            aria-label='radio 1'
            onChange={dateValidatorCurrent}
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
            onChange={DescriptionValidator}
          ></textarea>
          <label className='form-label' for='textAreaExample'>
            Description
          </label>
        </div>
      </form>
    </div>
  );
};

export default Education;
