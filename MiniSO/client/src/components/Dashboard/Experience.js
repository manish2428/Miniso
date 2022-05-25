import React from 'react';
import { useSelector } from 'react-redux';

const Experience = () => {
  const { profile } = useSelector((state) => state.profile);
  return (
    <div>
      <div>
        <h1>Experience Credentials</h1>
      </div>

      <div>
        <table className='table table-striped table-hover' name='table'>
          <tr>
            <th>Company</th>
            <th>Title</th>
            <th>Years</th>
            <th> </th>
          </tr>
          {profile.experience.length > 0 &&
            profile.experience.map((i) => (
              <tr key={i._id}>
                <td>{i.company}</td>
                <td>{i.title}</td>
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

export default Experience;
