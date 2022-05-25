import React, { useState } from 'react';
import validator from 'validator';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../../actions/authAction';
import isAlphanumeric from 'validator/lib/isAlphanumeric';
import { toast } from 'react-toastify';

const Signup = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const errors = [];
  const dataSubmit = (e) => {
    e.preventDefault();
    if (name.length < 3) {
      errors.push('Length of name must be atleast 3.');
    }

    if (!validator.isEmail(email)) {
      errors.push('Email is not valid.');
    }

    if (password.length < 5 && !isAlphanumeric(password)) {
      errors.push(
        'Password must contain 6 characters and must contain numbers and symbol.'
      );
    }

    if (phone.lenght !== 10) {
      errors.push('Invalid Phone number.');
    }
    if (errors.length > 0) {
      errors.map((e) => {
        toast.error(e, { theme: 'colored' });
      });
      while (errors.length > 0) errors.pop();
    } else {
      register({ name, email, password, phone }).then((res) => {
        if (res.status > 400) {
          toast.error(res.data.message, { theme: 'colored' });
        } else {
          toast.success(res.data.message, { theme: 'colored' });
          navigate('/login');
        }
      });
    }
  };

  const nameValidator = (e) => {
    setName(e.target.value);
  };

  const emailValidator = (e) => {
    setEmail(e.target.value);
  };

  const phoneValidator = (e) => {
    setPhone(e.target.value);
  };

  const passwordValidator = (e) => {
    setPassword(e.target.value);
  };

  return (
    <section className='vh-100 gradient-custom'>
      <div className='container h-100'>
        <div className='row d-flex justify-content-center align-items-center h-100'>
          <div className='col-lg-12 col-xl-11'>
            <div className='card text-black gb'>
              <div className='card-body p-md-4'>
                <div className='row justify-content-center'>
                  <div className='col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1'>
                    <p className='text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4'>
                      Register on{' '}
                      <Link to='/' className='text-dark'>
                        Coder's hub
                      </Link>
                    </p>
                    <form className='mx-1 mx-md-4'>
                      <div className='d-flex flex-row align-items-center mb-4'>
                        <i className='fas fa-user fa-lg me-3 fa-fw'></i>
                        <div className='form-outline flex-fill mb-0'>
                          <input
                            type='text'
                            id='form3Example1c'
                            value={name}
                            name='name'
                            className='form-control'
                            onChange={nameValidator}
                          />
                          <label
                            className='form-label'
                            htmlFor='form3Example1c'
                          >
                            Your Name *
                          </label>
                        </div>
                      </div>

                      <div className='d-flex flex-row align-items-center mb-4'>
                        <i className='fas fa-envelope fa-lg me-3 fa-fw'></i>
                        <div className='form-outline flex-fill mb-0'>
                          <input
                            type='email'
                            id='form3Example3c'
                            value={email}
                            name='email'
                            className='form-control'
                            onChange={emailValidator}
                          />
                          <label
                            className='form-label'
                            htmlFor='form3Example3c'
                          >
                            Your Email *
                          </label>
                        </div>
                      </div>

                      <div className='d-flex flex-row align-items-center mb-4'>
                        <i className='fas fa-lock fa-lg me-3 fa-fw'></i>
                        <div className='form-outline flex-fill mb-0'>
                          <input
                            type='password'
                            id='form3Example4c'
                            value={password}
                            name='password'
                            className='form-control'
                            onChange={passwordValidator}
                          />
                          <label
                            className='form-label'
                            htmlFor='form3Example4c'
                          >
                            Password *
                          </label>
                        </div>
                      </div>

                      <div className='d-flex flex-row align-items-center mb-4'>
                        <i className='fas fa-phone fa-lg me-3 fa-fw'></i>
                        <div className='form-outline flex-fill mb-0'>
                          <input
                            type='number'
                            id='form3Example4cd'
                            value={phone}
                            name='phone'
                            className='form-control'
                            onChange={phoneValidator}
                          />
                          <label
                            className='form-label'
                            htmlFor='form3Example4cd'
                          >
                            Phone Number
                          </label>
                        </div>
                      </div>

                      <div className='d-flex justify-content-center mx-4 mb-2 mb-lg-2'>
                        <button
                          type='button'
                          className='btn btn-primary btn-lg'
                          onClick={dataSubmit}
                        >
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className='col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2'>
                    <img
                      src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp'
                      className='img-fluid'
                      alt='Sample image'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
