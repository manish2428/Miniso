import React from 'react';

const Modalbtn = ({ name, title, cl, content, submit, icon }) => {
  return (
    <>
      <button
        type='button'
        className={cl}
        data-mdb-toggle='modal'
        data-mdb-target={`#exampleModal`}
      >
        {icon && <i className={icon}></i>} {name}
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
                {title}
              </h5>
              <button
                type='button'
                className='btn-close'
                data-mdb-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>{content}</div>
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
                onClick={submit}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modalbtn;
