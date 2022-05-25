import './App.css';
import store from './store';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import jwt_decode from 'jwt-decode';

import Homepage from './components/Homepage/Homepage';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Dashboard from './components/Dashboard/Dashboard';
import setAuthToken from './actions/setAuthToken';
import Experience from './components/Profile/Experience';
import Post from './components/posts/Post';
import Education from './components/Profile/Education';
import { SET_CURRENT_USER } from './actions/types';

if (localStorage.token) {
  // Set auth token header auth
  setAuthToken(localStorage.token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.token);
  // Set user and isAuthenticated
  store.dispatch({
    type: SET_CURRENT_USER,
    payload: decoded,
  });

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // setAuthToken();
    // Logout user
    store.dispatch({
      type: SET_CURRENT_USER,
      payload: null,
    });
    // navigate('/login');
  }
}

const App = () => {
  return (
    <Provider store={store}>
      <ToastContainer autoClose={5000} />
      <Router>
        <div className='App'>
          <Routes>
            <Route exact path='/' element={<Homepage />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/register' element={<Signup />} />
            <Route exact path='/dashboard' element={<Dashboard />} />
            <Route exact path='/add-experience' element={<Experience />} />
            <Route exact path='/add-education' element={<Education />} />
            <Route exact path='/post' element={<Post />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};
// 2a16448d9dd04d8eb73d16ca946489e5

export default App;
