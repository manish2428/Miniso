import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import validator from 'validator';
import { useSelector, useDispatch } from 'react-redux';
import isAlphanumeric from 'validator/lib/isAlphanumeric';
import { login } from '../../actions/authAction';
import { toast } from 'react-toastify';
import { SET_CURRENT_USER } from '../../actions/types';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../../actions/setAuthToken';

const Login = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const errors = [];
  const loginButtonClicked = (e) => {
    e.preventDefault();
    if (!validator.isEmail(email)) {
      errors.push('Invalid email id');
    }
    if (password.length < 6 && !isAlphanumeric(password)) {
      errors.push(
        'Password must contain 6 characters and must contain numbers and symbol.'
      );
    }

    if (errors.length > 0) {
      errors.map((e) => {
        toast.error(e, { theme: 'colored' });
      });
      while (errors.length > 0) errors.pop();
    } else {
      login({ email, password }).then((res) => {
        if (res.status > 400) {
          toast.error(res.data.message, { theme: 'colored' });
        } else {
          toast.success(res.data.message, { theme: 'colored' });
          localStorage.setItem('token', res.data.token);
          // console.log(res.data);
          setAuthToken(res.data.token);
          const decoded = jwt_decode(res.data.token);
          // console.log(res);
          dispatch({
            type: SET_CURRENT_USER,
            payload: decoded,
          });
          navigate('/dashboard');
        }
      });
    }
  };

  return (
    <section className='vh-100 gradient-custom'>
      <div className='container py-5 h-100'>
        <div className='row d-flex justify-content-center align-items-center h-100'>
          <div className='col-12 col-md-8 col-lg-6 col-xl-5'>
            <div className='card bg-dark text-white'>
              <div className='card-body p-5 text-center'>
                <div className='mb-md-5 mt-md-4 pb-1'>
                  <h2 className='fw-bold mb-2 text-uppercase'>
                    <Link to='/' className='text-light'>
                      Coder's Hub
                    </Link>
                  </h2>
                  <p className='text-white-50 mb-5'>
                    Login : Enter your email and password!
                  </p>

                  <div className='form-outline form-white mb-4'>
                    <input
                      type='email'
                      id='typeEmailX'
                      name='email'
                      className='form-control form-control-lg bg-dark text-light'
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label className='form-label' htmlFor='typeEmailX'>
                      Email
                    </label>
                  </div>

                  <div className='form-outline form-white mb-4'>
                    <input
                      type='password'
                      id='typePasswordX'
                      className='form-control form-control-lg bg-dark text-light'
                      name='password'
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <label className='form-label' htmlFor='typePasswordX'>
                      Password
                    </label>
                  </div>

                  <p className='small mb-2 pb-lg-2'>
                    <Link className='text-white-50' to='/forgot-password'>
                      Forgot password?
                    </Link>
                  </p>

                  <button
                    className='btn btn-outline-light btn-lg px-5'
                    type='submit'
                    onClick={loginButtonClicked}
                  >
                    Login
                  </button>
                </div>

                <div>
                  <p className='mb-0'>
                    Don't have an account?
                    <Link to='/register' className='text-white-50 fw-bold'>
                      Sign Up
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
