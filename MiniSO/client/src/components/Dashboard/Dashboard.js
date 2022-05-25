import Education from './Education';
import Experience from './Experience';
import './Dashboard.css';
import Navbar from '../Navbar/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { createProfile, getCurrentProfile } from '../../actions/profileAction';
import { GET_PROFILE } from '../../actions/types';
import { Link, useNavigate } from 'react-router-dom';
import ProfileAction from './ProfileAction';

import Spinner from './Spinner';
import Modalbtn from './ModalBtn';
import classnames from 'classnames';

function Dashboard() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.profile);
  const navigate = useNavigate();

  const [handle, setHandle] = useState('');
  const [status, setStatus] = useState('');
  const [skills, setSkills] = useState('');
  const [bio, setBio] = useState('');
  const [github, setGithub] = useState('');
  const [instagram, setInstagram] = useState('');
  const [facebook, setFacebook] = useState('');
  const [youtube, setYoutube] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [twitter, setTwitter] = useState('');

  const data = {
    handle,
    status,
    skills: skills.split(','),
    bio,
    github,
    instagram,
    facebook,
    youtube,
    linkedin,
    twitter,
  };

  const submit = () => {
    console.log(data);
    createProfile(data).then((res) => {
      console.log(res.data);

      toast.success('Your profile has been created', { theme: 'colored' });
      // window.location.reload();
    });
  };

  const getData = () => {
    setHandle(profile.handle);
    setStatus(profile.status);
    setBio(profile.bio);
    setGithub(profile.github);
    setSkills(profile.skills.join(','));
    setInstagram(profile.social.instagram || instagram);
    setFacebook(profile.social.facebook || facebook);
    setYoutube(profile.social.youtube || youtube);
    setLinkedin(profile.social.linkedin || linkedin);
    setTwitter(profile.social.twitter || twitter);
  };

  const modalContent = (
    <table>
      <tbody>
        <tr>
          <td>
            <div className='form-outline'>
              <input
                type='text'
                id='form12'
                className='form-control'
                value={handle}
                onChange={(e) => setHandle(e.target.value)}
              />
              <label className='form-label' htmlFor='form12'>
                Nickname
              </label>
            </div>
          </td>

          <td>
            <div className='form-outline'>
              <input
                type='text'
                id='form12'
                className='form-control'
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              />
              <label className='form-label' htmlFor='form12'>
                Position / Role
              </label>
            </div>
          </td>
        </tr>
        <br />
        <tr>
          <td>
            <div className='form-outline'>
              <input
                type='text'
                id='form12'
                className='form-control'
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
              />
              <label className='form-label' htmlFor='form12'>
                Skills (seperate by ',')
              </label>
            </div>
          </td>

          <td>
            <div className='form-outline'>
              <input
                type='text'
                id='form12'
                className='form-control'
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
              <label className='form-label' htmlFor='form12'>
                Bio
              </label>
            </div>
          </td>
        </tr>
        <br />
        <tr>
          <td>
            <div className='form-outline'>
              <input
                type='text'
                id='form12'
                className='form-control'
                value={github}
                onChange={(e) => setGithub(e.target.value)}
              />
              <label className='form-label' htmlFor='form12'>
                Github link
              </label>
            </div>
          </td>

          <td></td>
        </tr>
        <br />
        <tr>
          <td colSpan='2'>
            <center>Social Media</center>
          </td>
        </tr>
        <br />
        <tr>
          <td>
            <div className='input-group mb-3'>
              <div className='input-group-prepend'>
                <span className='input-group-text'>
                  <i className={classnames('fab fa-twitter py-1')} />
                </span>
              </div>
              <input
                className='form-control form-control-lg'
                placeholder='Twitter Profile URL'
                name='twitter'
                value={twitter}
                onChange={(e) => setTwitter(e.target.value)}
              />
            </div>
          </td>

          <td>
            <div className='input-group mb-3'>
              <div className='input-group-prepend'>
                <span className='input-group-text'>
                  <i className={classnames('fab py-1 fa-facebook')} />
                </span>
              </div>
              <input
                className='form-control form-control-lg'
                placeholder='Facebook Profile URL'
                name='facebook'
                value={facebook}
                onChange={(e) => setFacebook(e.target.value)}
              />
            </div>
          </td>
        </tr>
        <br />
        <tr>
          <td>
            <div className='input-group mb-3'>
              <div className='input-group-prepend'>
                <span className='input-group-text'>
                  <i className={classnames('fab py-1 fa-linkedin')} />
                </span>
              </div>
              <input
                className='form-control form-control-lg'
                placeholder='Linkedin Profile URL'
                name='linkedin'
                value={linkedin}
                onChange={(e) => setLinkedin(e.target.value)}
              />
            </div>
          </td>

          <td>
            <div className='input-group mb-3'>
              <div className='input-group-prepend'>
                <span className='input-group-text'>
                  <i className={classnames('fab py-1 fa-youtube')} />
                </span>
              </div>
              <input
                className='form-control form-control-lg'
                placeholder='Youtube Profile URL'
                name='youtube'
                value={youtube}
                onChange={(e) => setYoutube(e.target.value)}
              />
            </div>
          </td>
        </tr>
        <br />
        <tr>
          <td>
            <div className='input-group mb-3'>
              <div className='input-group-prepend'>
                <span className='input-group-text'>
                  <i className={classnames('fab py-1 fa-instagram')} />
                </span>
              </div>
              <input
                className='form-control form-control-lg'
                placeholder='Instagram Profile URL'
                name='instagram'
                value={instagram}
                onChange={(e) => setInstagram(e.target.value)}
              />
            </div>
          </td>

          <td></td>
        </tr>
      </tbody>
    </table>
  );

  let dashboardContent;

  if (profile === null) {
    dashboardContent = <Spinner />;
  } else {
    // Check if logged in user has profile data
    if (Object.keys(profile).length > 0) {
      dashboardContent = (
        <div>
          <p className='lead text-muted'>Welcome {user.name}</p>
          <ProfileAction
            editContent={modalContent}
            editAction={submit}
            getData={getData}
          />
          <Experience />
          <Education />
          {/* <div style={{ marginBottom: '60px' }} /> */}
          <button className='btn btn-danger'>Delete My Account</button>
        </div>
      );
    } else {
      // User is logged in but has no profile
      dashboardContent = (
        <div>
          <h1 className=''>Welcome {user.name}</h1>
          <p>You have not yet setup a profile, please add some info</p>
          <Modalbtn
            name='Create Profile'
            cl='btn btn-lg btn-dark'
            title='Create Profile'
            data={data}
            submit={submit}
            content={modalContent}
          />
        </div>
      );
    }
  }

  useEffect(() => {
    getCurrentProfile().then((res) => {
      // console.log(res.data);
      if (res.status > 399) {
        toast.warn(res.data.msg, { theme: 'colored' });
        dispatch({
          type: GET_PROFILE,
          payload: {},
        });
      } else {
        dispatch({
          type: GET_PROFILE,
          payload: res.data,
        });
      }
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className='dashboard'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <h1 className='display-4'>Dashboard</h1>
              {dashboardContent}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
