import React from 'react';
import { useSelector } from 'react-redux';

const DisplayEducation = () => {
  const { profile } = useSelector((state) => state.profile);

  return (
    <div>
      <div>
        <h1>Education Credentials</h1>
      </div>

      <div>
        <table className='table table-striped table-hover' name='table'>
          <tr>
            <th>School</th>
            <th>Degree</th>
            <th>Years</th>
            <th></th>
          </tr>
          {profile.education.length > 0 &&
            profile.education.map((i) => (
              <tr key={i._id}>
                <td>{i.school}</td>
                <td>{i.degree}</td>
                <td>
                  {i.from}&nbsp;&nbsp;-&nbsp;&nbsp;{!i.current ? i.to : 'Now'}
                </td>
                <td>
                  <button
                    type='button'
                    className='btn btn-danger bg-danger'
                    name={i._id}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </table>
      </div>
    </div>
  );
};

export default DisplayEducation;
