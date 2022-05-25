import { useState } from 'react';

function Profile() {
  //company details
  const [Cname, setCname] = useState('');
  const [Cweb, setCweb] = useState('');
  const [Clocation, setClocation] = useState('');
  const [status, setStatus] = useState('');
  const [skills, setSkills] = useState('');
  const [bio, setBio] = useState('');
  const [gituser, setGituser] = useState('');

  //   //experience
  //   const [title,setTitle]=useState('');
  //   cosnt [location,setLocation]=useState("");
  //   const [doj,setDoj]=useState('');
  //   const [to,setTo]=useState('');
  //   const [current,setCurrent]=useState('');
  //   const [description,setDescription]=useState('');

  //   //education
  //   const [schoolname,setSchoolname]=useState('');
  //   const [degree,setDegree]=useState('');
  //   const [interest,setInterest]=useState('');
  //   const [educationdoj,seteduDoj]=useState('');
  //   const [educationto,seteduTo]=useState('');
  //   const [educationcurrent,seteduCurrent]=useState('');

  const cnamehandle = (e) => {
    let name = e.target.value;
    setCname(name);
  };

  const cwebhandle = (e) => {
    setCweb(e.taget.value);
  };

  const clocationhandle = (e) => {
    setClocation(e.target.value);
  };

  const cstatushandle = (e) => {
    setStatus(e.target.value);
  };

  const cskillshandle = (e) => {
    setSkills(e.target.value);
  };

  const cbiohandle = (e) => {
    setBio(e.target.value);
  };

  const cgituserhandle = (e) => {
    setGituser(e.target.value);
  };

  const btnclick = () => {
    console.log('BUTTON CLICKED');
  };

  return (
    <div>
      <h1>Company Details</h1>
      <form action=''>
        <div className='form-outline'>
          <div>
            <lable>Company Name</lable>
          </div>
          <input
            type='text'
            id='typeText'
            className='form-control'
            onChange={cnamehandle}
          />
          <label className='form-label' for='typeText'>
            Name
          </label>
        </div>

        <div className='form-outline'>
          <div>
            <lable>Company Website</lable>
          </div>
          <input
            type='url'
            id='typeURL'
            className='form-control'
            onChange={cwebhandle}
          />
          <label className='form-label' for='typeURL'>
            URL input
          </label>
        </div>

        <div className='form-outline'>
          <div>
            <lable>Company Location</lable>
          </div>
          <input
            type='text'
            id='typeText'
            className='form-control'
            onChange={clocationhandle}
          />
          <label className='form-label' for='typeText'>
            Location of the company
          </label>
        </div>

        <div className='form-outline'>
          <div>
            <lable>Status</lable>
          </div>

          <input
            type='text'
            id='typeText'
            className='form-control'
            onChange={cstatushandle}
            required
          />
          <label className='form-label' for='typeText'>
            Text input
          </label>
        </div>

        <div className='form-outline'>
          <div>
            <lable>Skills</lable>
          </div>
          <input
            type='text'
            id='typeText'
            className='form-control'
            required
            onChange={cskillshandle}
          />
          <label className='form-label' for='typeText'>
            c, c++, java
          </label>
        </div>

        <div className='form-outline'>
          <div>
            <lable>Bio</lable>
          </div>
          <textarea
            className='form-control'
            id='textAreaExample'
            rows='4'
            onChange={cbiohandle}
          ></textarea>
          <label className='form-label' for='textAreaExample'>
            Bio
          </label>
        </div>

        <div className='form-outline'>
          <div>
            <lable>Github Username</lable>
          </div>
          <input
            type='text'
            id='typeText'
            className='form-control'
            onChange={cgituserhandle}
          />
          <label className='form-label' for='typeText'>
            manish2428
          </label>
        </div>
        <button className='btn danger' onClick={btnclick}>
          Save
        </button>
      </form>

      {/* <h1>Experience</h1>
      <form>

        <div className='form-outline'>
          <div>
            <lable>Title</lable>
          </div>
          <input type='text' id='typeText' className='form-control' required />
          <label className='form-label' for='typeText'>
            Job title
          </label>
        </div>


        <div className='form-outline'>
          <div>
            <lable>Company Name</lable>
          </div>
          <input type='text' id='typeText' className='form-control' required />
          <label className='form-label' for='typeText'>
           Company Name
          </label>
        </div>

        <div className='form-outline'>
          <div>
            <lable>Location</lable>
          </div>
          <input type='text' id='typeText' className='form-control'/>
          <label className='form-label' for='typeText'>
           Location
          </label>
        </div>


        <div className="form-outline">
            <div>
                <lable>Date of Joining</lable>
            </div>
            <DatePicker selected={startDate} onChange={} />
        </div>
          

        <div className="form-outline">
            <div>
                <lable>To</lable>
            </div>
            <DatePicker selected={startDate} onChange={} />
        </div>
  

        <div className="form-outline">
          <div>
             <lable>Current</lable>
          </div>
          <Form.Check type="checkbox" aria-label="radio 1" />
        </div>
                    
      

        <div className='form-outline'>
          <div>
            <lable>Description</lable>
          </div>
          <textarea
            className='form-control'
            id='textAreaExample'
            rows='4'
          ></textarea>
          <label className='form-label' for='textAreaExample'>
            Description
          </label>
        </div>


      </form> */}

      {/* <h1>education</h1>
          <form>
          <div className='form-outline'>
            <div>
              <lable>School Name</lable>
            </div>
            <input type='text' id='typeText' className='form-control' required />
            <label className='form-label' for='typeText'>
              Name of the school
            </label>
          </div>

          <div className='form-outline'>
            <div>
              <lable>Degree</lable>
            </div>
            <input type='text' id='typeText' className='form-control' required />
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
            ></textarea>
            <label className='form-label' for='textAreaExample'>
              Interest
            </label>
          </div>

          <div className="form-outline">
            <div>
              <lable>From</lable>
            </div>
            <DatePicker selected={startDate} onChange={} />
          </div>


          <div className="form-outline">
            <div>
              <lable>To</lable>
            </div>
            <DatePicker selected={startDate} onChange={} />
          </div>
          
          <div className="form-outline">
            <div>
              <lable>Current</lable>
            </div>
            <Form.Check type="checkbox" aria-label="radio 1" />
          </div>
                    
      

          <div className='form-outline'>
            <div>
              <lable>Description</lable>
            </div>
            <textarea
              className='form-control'
              id='textAreaExample'
              rows='4'
            ></textarea>
            <label className='form-label' for='textAreaExample'>
              Description
            </label>
          </div>  
      </form> */}
    </div>
  );
}

export default Profile;
