import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/authAction';
import { toast } from 'react-toastify';
import { SET_CURRENT_USER } from '../../actions/types';

const Navbar = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const Logout = () => {
    logout().then((res) => {
      console.log(res.data);
      localStorage.removeItem('token');
      toast.success(res.data.message, { theme: 'colored' });
      dispatch({ type: SET_CURRENT_USER, payload: null });
    });
  };

  return (
    <nav className='navbar navbar-expand-lg bg-primary navbar-dark fixed-top'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'>
          Coder's Hub
        </Link>

        <button
          className='navbar-toggler'
          type='button'
          data-mdb-toggle='collapse'
          data-mdb-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <i className='fas fa-bars'></i>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link className='nav-link' to='/post'>
                Posts
              </Link>
            </li>

            {/* <li className='nav-item dropdown'>
              <Link
                className='nav-link dropdown-toggle'
                to='#'
                id='navbarDropdown'
                role='button'
                data-mdb-toggle='dropdown'
                aria-expanded='false'
              >
                Dropdown
              </Link>
              <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                <li>
                  <Link className='dropdown-item' to='#'>
                    Action
                  </Link>
                </li>
                <li>
                  <Link className='dropdown-item' to='#'>
                    Another action
                  </Link>
                </li>
                <li>
                  <hr className='dropdown-divider' />
                </li>
                <li>
                  <Link className='dropdown-item' to='#'>
                    Something else here
                  </Link>
                </li>
              </ul>
            </li> */}
          </ul>

          <ul className='navbar-nav d-flex flex-row me-1'>
            {auth.isAuthenticated && (
              <>
                <li className='nav-item me-3 me-lg-0'>
                  <Link className='nav-link' to='/dashboard'>
                    Dashboard
                  </Link>
                </li>
                <li className='nav-item me-3 me-lg-0'>
                  <Link className='nav-link' to='/' onClick={Logout}>
                    Log out
                  </Link>
                </li>
              </>
            )}
            {!auth.isAuthenticated && (
              <>
                <li className='nav-item me-3 me-lg-0'>
                  <Link className='nav-link' to='/register'>
                    Sign up
                  </Link>
                </li>

                <li className='nav-item me-3 me-lg-0'>
                  <Link className='nav-link' to='/login'>
                    Log in
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
