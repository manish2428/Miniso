import React from 'react';
import { Link } from 'react-router-dom';
import Modalbtn from './ModalBtn';

const modalContent = <h1>Hi</h1>;
const submit = () => {};
const data = 'Hi';

const ProfileAction = ({ editAction, editContent, getData }) => {
  return (
    <>
      <div className='btn-group mb-4' role='group'>
        <button
          type='button'
          className='btn btn-light'
          onClick={getData}
          data-mdb-toggle='modal'
          data-mdb-target={`#exampleModal`}
        >
          <i className='fas fa-user-circle text-info mr-1'></i> Edit Profile
        </button>

        <div
          className='modal fade'
          id={`exampleModal`}
          tabIndex='-1'
          aria-labelledby='exampleModalLabel'
          aria-hidden='true'
        >
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title' id='exampleModalLabel'>
                  Edit Profile
                </h5>
                <button
                  type='button'
                  className='btn-close'
                  data-mdb-dismiss='modal'
                  aria-label='Close'
                ></button>
              </div>
              <div className='modal-body'>{editContent}</div>
              <div className='modal-footer'>
                <button
                  type='button'
                  className='btn btn-secondary'
                  data-mdb-dismiss='modal'
                >
                  Close
                </button>
                <button
                  type='button'
                  className='btn btn-primary'
                  data-mdb-dismiss='modal'
                  onClick={editAction}
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>

        <Link to='/add-experience' className='btn btn-light'>
          <i className='fab fa-black-tie text-info mr-1' />
          Add Experience
        </Link>
        <Link to='/add-education' className='btn btn-light'>
          <i className='fas fa-graduation-cap text-info mr-1' />
          Add Education
        </Link>
      </div>
    </>
  );
};

export default ProfileAction;
